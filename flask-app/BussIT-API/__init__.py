from flask import Flask, jsonify
from .vasttrafik import get_vasttrafik_data

app = Flask(__name__)


@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    response = get_vasttrafik_data(id)

    status = 400\
    	if 'error' in response\
    	else 200

    return jsonify(response), status,\
    	{'Access-Control-Allow-Origin': '*'}
