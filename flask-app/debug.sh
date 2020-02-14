#!/usr/bin/env sh

# Activate virtual envriontment
. ./venv/bin/activate

# Flask entry point
export FLASK_APP=BussIT-API
# Flask debug mode, live code reload and debugger activated
export FLASK_DEBUG=1

#Get the key and secret from https://developer.vasttrafik.se/
export VASTTRAFIK_KEY=
export VASTTRAFIK_SECRET=

# Run application allowing external requests
python3 -m flask run