from __future__ import absolute_import, division
import os
import sys
from application import settings

# add required libraries to system path
for lib_name in settings.REQUIRED_LIBS:
    lib_path = os.path.join(settings.LIB_PATH, lib_name)
    if lib_path not in sys.path:
        sys.path.append(lib_path)

# start flask
from flask import Flask
app = Flask(__name__)

# add views
from application import views
