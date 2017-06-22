import json
import requests
from .api_keys import API

def getDarkSkyJSON(location):
    authKey = API['darkSky']['secret']
    host = 'https://api.darksky.net'
    baseurl = '/forecast/'
    request = {
        'lang': 'sv',
        'units': 'si',
        'exclude': ['flags'],
    }
    requestURL = host + baseurl + authKey + '/' + location
    r = requests.get(requestURL, params=request)
    r = json.loads(json.dumps(r.json()))
    return modifyJSON(r)

def modifyJSON(data):
    return json.dumps(data)
