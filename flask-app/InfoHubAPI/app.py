from flask import Flask
import datetime
import json
import requests
import base64
from .api_keys import API
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    return getVasttrafikJSON(id)

def getVasttrafikJSON(id):
    authKey = getAccsessTokenVasttrafik()
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
    return json.dumps(r.json())

def getAccsessTokenVasttrafik():
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
