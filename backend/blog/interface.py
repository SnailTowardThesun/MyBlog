from django.http import HttpResponse, HttpResponseForbidden
from . import errno
import json


# for GET request
def get_all_articles(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    return HttpResponse("ready to get all articles")


def get_all_categories(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))
    return HttpResponse("ready to get all categories")


def get_comment_by_article(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))
    return HttpResponse("ready to get comments")


# for POST method
def post_comment(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))
    return HttpResponse("get comment form")
