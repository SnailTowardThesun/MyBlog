from django.conf.urls import url
from . import views, models

urlpatterns = [
    url(r'^$', views.index),
    url(r'article', models.get_article),
    url(r'category', models.get_article_category),
    url(r'comment', models.post_comment)
]
