#!/bin/bash

# Get client-sim-engine. Web client tests rely on it running to run
git clone https://github.com/wanderanimrod/Utraffic-Client--Sim-Engine.git client-sim-engine
virtualenv --no-site-packages client-sim-engine-virtualenv
source client-sim-engine-virtualenv/bin/activate
pip install -r client-sim-engine/pip-requires.txt
python client-sim-engine/app/app.py &

# Test that the client-sim-engine is up
curl -X POST http://127.0.0.1:5000/series/?debug=true

# Get into the web client and prepare to run tests
cd app/static/js
