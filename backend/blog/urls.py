from django.conf.urls import url
from . import views, interface

urlpatterns = [
    url(r'^$', views.index),
    url(r'^articles', interface.get_all_articles),
    url(r'^article', interface.get_article),
    url(r'^categories', interface.get_all_categories),
    url(r'^comment', interface.get_comment_by_article),
    url(r'^register_comment', interface.post_comment)
]
