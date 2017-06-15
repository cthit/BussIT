from flask import Flask
from .vasttrafik import getVasttrafikJSON
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    return getVasttrafikJSON(id)
