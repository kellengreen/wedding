from __future__ import absolute_import, division
from flask import render_template
from application import app


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_handler(path):
    return render_template('home.html')