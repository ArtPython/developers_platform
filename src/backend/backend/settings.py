from split_settings.tools import include
import os
import environ

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

env = environ.Env()
environ.Env.read_env()

# SECRET_KEY = env('SECRET_KEY')
SECRET_KEY = '123'

# DEBUG = env('DEBUG')
DEBUG = True
ALLOWED_HOSTS = []

include(
    'conf/installed_apps.py',
    'conf/db.py',
    'conf/middleware.py',
    'conf/templates.py',
    'conf/auth_password_validators.py',
    'conf/static.py',
    'conf/use_file.py',
    'conf/default_auto_field.py',
    'conf/constances.py',
    'conf/internal_ips.py',
    'conf/cors.py',
    'conf/rest_framework.py',
    'conf/cache.py',
    'conf/simple_jwt.py',
    'conf/media.py',
    'conf/debug_toolbar.py',
    'conf/emails.py',
)

ROOT_URLCONF = 'backend.urls'

WSGI_APPLICATION = 'backend.wsgi.application'
