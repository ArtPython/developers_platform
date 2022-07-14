class CustomMiddleware:

    def __init__(self, get_response):
        self._get_response = get_response

    def __call__(self, request):
        print('we are in first middleware, before')
        response = self._get_response(request)
        print('we are in first middleware, after')
        return response


class SecondCustomMiddleware:
    def __init__(self, get_response):
        self._get_response = get_response

    def __call__(self, request):
        print('we are in second middleware, before')
        response = self._get_response(request)
        print('we are in second middleware, after')
        return response
