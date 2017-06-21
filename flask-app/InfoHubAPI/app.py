from flask import Flask, Response
from .vasttrafik import getVasttrafikJSON
from .darksky import getDarkSkyJSON
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    resp = Response(getVasttrafikJSON(id))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    return resp

@app.route('/darksky/<location>')
# location format: [latitude],[longitude]
def darksky(location=None):
    resp = Response(getDarkSkyJSON(location))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    return resp
