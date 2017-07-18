import datetime
import json
import requests
import base64
from operator import itemgetter
from .api_keys import API

def getVasttrafikJSON(id):
    authKey = getAccessToken()
    date = '20' + str(datetime.datetime.now().strftime("%y-%m-%d"))
    time = str(datetime.datetime.now().strftime("%H:%M"))
    host = 'https://api.vasttrafik.se'
    baseurl = '/bin/rest.exe/v2'
    headers = {
        'Authorization': 'Bearer ' + authKey
    }
    request = {
        'id': id,
        'date': date,
        'time': time,
        'format': 'json',
    }
    requestURL = host + baseurl + '/departureBoard'
    r = requests.get(requestURL, params=request, headers=headers)
    r = json.loads(json.dumps(r.json()))
    return modifyJSON(r)

def getAccessToken():
    url = 'https://api.vasttrafik.se/token' # Set destination URL here
    key = API['vasttrafik']['key']
    secret = API['vasttrafik']['secret']
    encoded = base64.b64encode((key + ":" + secret).encode()).decode()
    post_fields = {
        'grant_type': 'client_credentials',
        'scope': '1'
    }
    headers = {
        'Authorization': 'Basic ' + encoded,
        'Content-Type': 'application/x-www-form-urlencoded',
    }     # Set POST fields here
    r = requests.post(url, data=post_fields, headers=headers).json()
    r = json.dumps(r)
    access_token = json.loads(r)['access_token']
    return access_token

def modifyJSON(data):
    tmp = {}
    result = {'Departure': []}
    tmp['Departure'] = data['DepartureBoard']['Departure']
    data = tmp
    #departures = {v['direction']:v for v in data['Departure']}
    departures = sortDepartures(data)
    key_list = departures.keys()
    for stop_id in key_list:
        tmp = list(filter(lambda d: d['sname']+d['direction'] in stop_id, data['Departure']))
        try:
            departures[stop_id]['rtTime'] = tmp[0]['rtTime']
        except Exception as e:
            departures[stop_id]['rtTime'] = tmp[0]['time']
        try:
            departures[stop_id]['rtDate'] = tmp[0]['rtDate']
        except Exception as e:
            departures[stop_id]['rtDate'] = tmp[0]['date']
        if len(tmp) > 1:
            try:
                departures[stop_id]['nextRtTime'] = tmp[1]['rtTime']
            except Exception as e:
                departures[stop_id]['nextRtTime'] = tmp[1]['time']
            try:
                departures[stop_id]['nextRtDate'] = tmp[1]['rtDate']
            except Exception as e:
                departures[stop_id]['nextRtDate'] = tmp[1]['date']
            try:
                departures[stop_id]['nextAccessibility'] = tmp[1]['accessibility']
            except Exception as e:
                departures[stop_id]['nextAccessibility'] = 'none'
        del departures[stop_id]['JourneyDetailRef']
        del departures[stop_id]['journeyid']
        del departures[stop_id]['stopid']
        del departures[stop_id]['time']
        del departures[stop_id]['date']
        result['Departure'].append(departures[stop_id])
    result['Departure'] = sorted(result['Departure'], key=itemgetter('rtDate', 'rtTime'))
    return json.dumps(result)

def sortDepartures(data):
    tmp = {}
    output = {}
    for d in data['Departure']:
        if d['sname'] + d['direction'] in tmp:
            continue
        tmp[d['name']+d['direction']] = 1
        output[d['sname']+d['direction']] = d
    return output
