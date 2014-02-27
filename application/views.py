from __future__ import absolute_import, division
from flask import render_template
from application import app


@app.route('/')
def home_handler():
    return render_template('home.html')