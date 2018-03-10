export interface Article {
    id: string;
    title: string;
    author: string;
    publish_date: string;
    content: string;
}

export interface Comment {
    id: string;
    author: string;
    publish_date: string;
    content: string;
}

export interface Category {
    id: string,
    name: string;
    count: number;
}
