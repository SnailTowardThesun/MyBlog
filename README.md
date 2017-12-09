# 博客设计

使用Django＋Angular 4 搭建博客

[Django](http://djangoproject.com/)

[Angulay](https://angular.io/)

## 主要结构设计文档

前后端分离，使用protobuf进行通信。

### 文章获取

1. 获取单一页面的文章列表以及页面数量信息

    `GET http://127.0.0.1/article?page=1`

1. 获取指定文章详细内容，包括作者信息，发布时间，评论等

    `GET http://127.0.0.1/article?id=123321`

1. 获取文章分类信息以及文章数量

    `GET http://127.0.0.1/category`

## 用户交互

1. 发表评论

    `POST http://127.0.0.1/comment`
