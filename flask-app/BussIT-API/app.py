from flask import Flask, Response
from .vasttrafik import getVasttrafikJSON

app = Flask(__name__)


@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    resp = Response(getVasttrafikJSON(id))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
