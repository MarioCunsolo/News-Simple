export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface RootObject {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface ArticleModified {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
}
