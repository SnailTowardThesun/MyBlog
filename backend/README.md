# 后端设计

## 数据库表设计

1. *doc/database/database_design.pdf*：        数据库EER图

1. *doc/database/blog_database_script.sql*：   生成数据库的sql脚本

## 初始化数据库

1. 参照[官方文档](https://docs.djangoproject.com/en/1.11/ref/databases/)修改settings.py中对应的数据库驱动

1. 使用`doc/database/blog_database_script.sql`文件创建数据库

1. 使用`python3 manage.py inspectdb > blog/models.py`命令将数据库中的内容导出工程中

1. 修改每个model中id的属性，由原本的`CharField`，改为`models.UUIDField(primary_key=True, max_length=36, default=uuid.uuid4, editable=False)`

## 后端对外接口设计
数据库采用json作为信息传递的荷载协议。TODO: 后期希望能够换成protobuf作为信息的传递。

后端回复的基本格式如下：
```
{
    "errorno":0,    // 错误码，0表示正确，非0表示错误，可以从doc/errno.md文件中获取到所有的错误码说明
    "data":{        // 具体信息，请参考下面不同接口给出的不同消息体含义
        ... ...
        ... ...
    }
}
```

### 查询接口
1. 查询所有的文章

    request:
    ```
    GET http://localhost/blog/article
    ```
    response:
    ```
    {
        "code":0,
        "data":{
            "article":[
                {
                    "id":"6024a4de-03f6-11e8-a1d6-a45e60dce389"     // 文章ID
                    "title":"article",                              // 文章标题
                    "author":"Me",                                  // 文章作者
                    "publish date":"018-01-28",                     // 文章发布日期
                    "content":"bref of articles",                   // 文章简介
                    "categories":"other",                           // 文章类型
                    "path":"http://localhost/article.md"            // 文章的url具体路径
                }
            ]
        }
    }
    ```

1. 查询所有tag信息
    request:
    ```
    GET http://localhost/blog/categroies
    ```

    response:
    ```
    {
        "code":0,
        "data": {
            "categories":[
                {
                    "id":"6024a4de-03f6-11e8-a1d6-a45e60dce389",    // 类型ID
                    "name":"other",                                 // 类型名称
                    "count":10                                      // 该类型文章的数量
                }
            ]
        }
    }
    ```

1. 查询某一个文章对应的所有评论
    request
    ```
    GET http://localhost/comment?article_id=6024a4de-03f6-11e8-a1d6-a45e60dce389
    ```
    response
    ```
    {
        "code":0,
        "data": {
            "comments":[
                {
                    "id":"6024a4de-03f6-11e8-a1d6-a45e60dce389",        // 评论ID
                    "author":"guest",                                   // 评论的作者
                    "publish date":"2018-01-28",                        // 评论发表的日期
                    "content":"wonderful"                               // 评论内容

                }
            ]
        }
    }
    ```

### 为了提交comment和message的submit接口
1. 为文章添加评论
    request:
    ```
    POST http://localhost/blog/register_commnet
    {
        "article_id":"6024a4de-03f6-11e8-a1d6-a45e60dce389",        // 文章ID
        "author":"guest",                                           // 评论的作者
        "content":"great"                                           // 评论内容
    }
    ```
    response:
    ```
    {
        "code":0,
        "data":{}
    }
    ```

1. 留言

    <strong>TODO...</strong>
    

