# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse


# Create your models here.
def get_article(request):
    return HttpResponse('1')


def get_category(request):
    return HttpResponse('2')


def post_comment(request):
    return HttpResponse('3')
