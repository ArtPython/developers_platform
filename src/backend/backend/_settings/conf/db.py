import os
import environ

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

env = environ.Env()
environ.Env.read_env()
DATABASES = {
    'default': {
        # 'ENGINE': env('ENGINE'),
        # 'NAME': env('NAME'),
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'db2.sqlite3'
    },
    # 'main': {
    #     'ENGINE': env('MAIN_ENGINE'),
    #     'NAME': env('MAIN_NAME'),
    #     'USER': env('MAIN_USER'),
    #     'PASSWORD': env('MAIN_PASSWORD'),
    #     'HOST': env('MAIN_HOST'),
    #     'PORT': env('MAIN_PORT'),
    #     'TEST': {
    #         'ENGINE': 'django.db.backends.sqlite3',
    #         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    #     },
    # },
}
DATABASE_ROUTERS = ['backend.database_router.DatabaseAppsRouter']
DATABASE_APPS_MAPPING = {
    # example:
    # 'app_name':'database_name',
    # 'languages': 'main',
}
