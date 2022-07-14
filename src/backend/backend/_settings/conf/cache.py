import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.filebased.FileBasedCache',
        'LOCATION': os.path.join(BASE_DIR, 'my_cache'),
    }
}
