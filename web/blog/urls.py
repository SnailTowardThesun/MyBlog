from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.homepage, name='index'),
    url(r'^index', views.homepage, name='index'),
    url(r'^about', views.aboutMe, name='about'),
    url(r'^contact', views.contact, name='contact'),
    url(r'^html5player', views.post, name='html5player'),
    url(r'^leave_message', views.leave_message, name='leave_message'),
    url(r'^article/(?P<article_file>\w+)/$', views.article_page, name='article_detail'),
    url(r'^page(?P<page_list_num>\w+)/$', views.page_list, name='get_page_list'),
]
