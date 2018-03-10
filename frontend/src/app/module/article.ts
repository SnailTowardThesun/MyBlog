export interface Article {
    id: string;
    title: string;
    author: string;
    publish_date: string;
    content: string;
    category: string[];
}

export interface Comment {
    id: string;
    article_id: string;
    author: string;
    publish_date: string;
    content: string;
}

export interface Category {
    name: string;
    count: number;
}
