from flask import Flask, jsonify
from vasttrafik import get_vasttrafik_data

def create_app():
    app = Flask(__name__)

    @app.route('/api/vasttrafik/<id>')
    def vasttrafik(id=None):
        response = get_vasttrafik_data(id)

        status = 400\
            if 'error' in response\
            else 200

        return jsonify(response), status,\
            {'Access-Control-Allow-Origin': 'http://localhost:3000'}
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0")