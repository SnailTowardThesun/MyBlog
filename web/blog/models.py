from __future__ import unicode_literals

from django.db import models


# Create your models here.

class Article(models.Model):
    def __str__(self):
        return self.article_title

    article_UUID_string = models.CharField(
        max_length=200)  # unique key.format is title + date ,e.g: first_blog_2016_01_22
    article_title = models.CharField(max_length=100)
    article_author = models.CharField(max_length=100)
    article_published_time = models.DateTimeField()
    article_priority = models.IntegerField(default=0)
    article_content = models.CharField(max_length=500)
    article_context_field = models.CharField(max_length=100)


class Comment(models.Model):
    article_UUID_string = models.CharField(max_length=200)  # unique key.format is title + date ,e.g: first_blog_2016_01_22
    comment_author = models.CharField(max_length=200)
    comment_published_time = models.DateTimeField()
    comment_context = models.CharField(max_length=5000)
    comment_author_phone_number = models.CharField(max_length=20)
    comment_author_email_address = models.CharField(max_length=200)

    def __str__(self):
        return self.article_UUID_string
