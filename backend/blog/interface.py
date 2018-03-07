from django.http import HttpResponse, HttpResponseForbidden
from . import errno
import json
from .models import Article, Comment, Category


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
                'categories': a.category,
                'path': a.path
            } for a in articles]
        }}

    return HttpResponse(json.dumps(res))


def get_all_categories(request):
    if request.method != "GET":
        data = {'code': errno.ERROR_HTTP_METHOD_INVALID, "data": {}}
        return HttpResponseForbidden(json.dumps(data))

    categories = Category.objects.all()
    res = {
        'code': 0,
        'data': {
            'categories': [{
                'id': str(c.id),
                'name': c.name,
                'count': ArticleHasCategory.objects.filter(category=c.id).count()
            } for c in categories]
        }
    }
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
