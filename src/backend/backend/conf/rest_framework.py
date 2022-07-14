from backend.conf.throttling import throttling
from backend.conf.authentication import authentication
# from backend.conf.render import render
# from backend.conf.pagination import pagination
from backend.conf.versions import versions

REST_FRAMEWORK = {}
REST_FRAMEWORK.update(throttling)
REST_FRAMEWORK.update(authentication)
# REST_FRAMEWORK.update(render)
# REST_FRAMEWORK.update(pagination)
REST_FRAMEWORK.update(versions)
