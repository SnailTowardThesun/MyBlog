export class Article {
    id: string;
    title: string;
    author: string;
    publish_date: string;
    content: string;
    category: string[];
}

export class Comment {
    id: string;
    article_id: string;
    author: string;
    publish_date: string;
    content: string;
}

export class Category {
    name: string;
    count: number;
}
