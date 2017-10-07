from flask import Flask, Response
from .vasttrafik import get_vasttrafik_json

app = Flask(__name__)


@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    resp = Response(get_vasttrafik_json(id))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
