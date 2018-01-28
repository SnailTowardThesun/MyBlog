from django.http import HttpResponse, Http404


# for GET request
def get_all_articles(request):
    return HttpResponse("ready to get all articles")


def get_all_categories(request):
    return HttpResponse("ready to get all categories")


def get_comment_by_article(request):
    return HttpResponse("ready to get comments")


# for POST method
def post_comment(request):
    return HttpResponse("get comment form")
