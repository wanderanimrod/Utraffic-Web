#!/bin/bash

# Fixes issue with requiring rsvp. Discussion and fix gotten from here https://github.com/tildeio/rsvp.js/pull/339/files
# Fix has already been merged. Version > 3.0.16

cp ./rsvp.js ../node_modules/rsvp/dist/rsvp.js
