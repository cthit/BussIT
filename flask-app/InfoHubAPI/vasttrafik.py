import datetime
import json
import requests
import base64
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
    departures = {v['direction']:v for v in data['Departure']}
    tmp_list = departures.keys()
    for stop_id in tmp_list:
        tmp = list(filter(lambda d: d['direction'] in stop_id, data['Departure']))
        if len(tmp) > 1:
            departures[stop_id]['rtTime'] = tmp[0]['rtTime']
            departures[stop_id]['rtDate'] = tmp[0]['rtDate']
            departures[stop_id]['nextRtTime'] = tmp[1]['rtTime']
            departures[stop_id]['nextRtDate'] = tmp[1]['rtDate']
            #departures[stop_id]['nextAccessibility'] = tmp[1]['accessibility']
        del departures[stop_id]['JourneyDetailRef']
        del departures[stop_id]['journeyid']
        del departures[stop_id]['stopid']
        result['Departure'].append(departures[stop_id])
    return json.dumps(result)
