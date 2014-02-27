from __future__ import absolute_import, division
import os

# CONFIGURATION
DEBUG = True

# PATHS
APP_PATH = os.path.abspath(os.path.dirname(__file__))
ROOT_PATH = os.path.abspath(os.path.join(APP_PATH, '..'))
LIB_PATH = os.path.abspath(os.path.join(ROOT_PATH, 'lib'))

# LIBRARIES
REQUIRED_LIBS = (
    'Flask-0.10',
    'Werkzeug-0.9.4',
    'itsdangerous-0.23'
)