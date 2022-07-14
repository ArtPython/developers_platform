INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# third party apps
INSTALLED_APPS += [
    'constance',
    # rest API implementation library for django
    'rest_framework',
    'debug_toolbar',
    'corsheaders',
    # third party package for user registration and authentication endpoints
    'djoser',
    # JWT authentication backend library
    'rest_framework_simplejwt',

]

# my apps
INSTALLED_APPS += [
    "apps.general",
    "apps.languages",
    "apps.frameworks",
    "apps.projects",
    "apps.developers",
    "apps.tasks",
    "apps.managers_qa",
    "apps.dev_to",
    "apps.man_qa_to",
]
