import { Article, Comment, Category } from './article';

export const ARTICLES: Article[] = [
  { id: "1", title: "first-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my first blog The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.", path: "test.md" },
  { id: "2", title: "second-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my second blog The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.", path: "test.md" },
  { id: "3", title: "third-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my third blog The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.", path: "test.md" },
  { id: "4", title: "forth-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my forth blog The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.", path: "test.md" },
  { id: "5", title: "fifth-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my fifth blog The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.", path: "test.md" }
];

export const COMMENTS: Comment[] = [
  { id: "1", author: "guest", publish_date: "2018-01-05 19:00:01", content: "wonderful" },
  { id: "2", author: "guest", publish_date: "2018-01-05 19:00:02", content: "wonderful again" }
];

export const CATEGORIES: Category[] = [
  { id: "123", name: "ca1", count: 5 },
  { id: "456", name: "ca2", count: 5 }
];
