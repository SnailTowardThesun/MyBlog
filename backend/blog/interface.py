from django.http import HttpResponse, HttpResponseForbidden
from . import errno
import json
from .models import Article, Comment, Category
from django.core.files.base import ContentFile


# for GET request
def get_all_articles(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    articles = Article.objects.all()

    res = {
        'code': 0,
        'data': {
            'article': [{
                'id': str(a.id),
                'title': a.title,
                'author': a.author,
                'publish data': str(a.publish_date),
                'content': a.content,
                'path': a.path
            } for a in articles]
        }}

    return HttpResponse(json.dumps(res))


def get_article(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    file_to_send = ContentFile("# title")
    response = HttpResponse(file_to_send)
    response['Content-Length'] = file_to_send.size
    return response


def get_all_categories(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    categories = Category.objects.all()
    dic = {}

    for c in categories:
        dic[c.name] = c

    res = {
        'code': 0,
        'data': {
            'categories': [{
                'id': str(d.id),
                'name': d.name,
                'count': Category.objects.filter(name=d.name).count()
            } for d in dic.values()]
        }
    }
    return HttpResponse(json.dumps(res))


def get_article_by_category(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    result = Category.objects.filter(name=request.GET['name'])
    res = {
        'code': 0,
        'data': {
            'article': [{
                'id': str(a.article.id),
                'title': a.article.title,
                'author': a.article.author,
                'publish data': str(a.article.publish_date),
                'content': a.article.content,
                'path': a.article.path
            } for a in result]
        }}

    return HttpResponse(json.dumps(res))


def get_comment_by_article(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    article_id = request.GET['article_id']

    comments = Comment.objects.filter(article=article_id)

    res = {
        'code': 0,
        'date': {
            'comments': [{
                'id': str(c.id),
                'author': c.author,
                'publish date': str(c.publish_date),
                'content': c.content
            } for c in comments]
        }
    }

    return HttpResponse(json.dumps(res))


# for POST method
def post_comment(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))
    return HttpResponse("get comment form")
