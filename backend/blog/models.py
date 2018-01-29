# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models
import uuid


class Article(models.Model):
    id = models.UUIDField(primary_key=True, max_length=36, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=45)
    publish_date = models.DateField()
    content = models.CharField(max_length=500, blank=True, null=True)
    category = models.CharField(max_length=200, blank=True, null=True)
    path = models.CharField(max_length=1024)

    def __str__(self):
        return self.title

    class Meta:
        managed = False
        db_table = 'article'


class ArticleHasCategory(models.Model):
    article = models.ForeignKey(Article, models.DO_NOTHING, primary_key=True)
    category = models.ForeignKey('Category', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'article_has_category'
        unique_together = (('article', 'category'),)


class Category(models.Model):
    id = models.UUIDField(primary_key=True, max_length=36, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    article_id = models.CharField(max_length=36)

    def __str__(self):
        return self.name

    class Meta:
        managed = False
        db_table = 'category'


class Comment(models.Model):
    id = models.UUIDField(primary_key=True, max_length=36, default=uuid.uuid4, editable=False)
    author = models.CharField(max_length=500)
    publish_date = models.DateField()
    content = models.CharField(max_length=1000, blank=True, null=True)
    article = models.ForeignKey(Article, models.DO_NOTHING)

    def __str__(self):
        return self.author

    class Meta:
        managed = False
        db_table = 'comment'
