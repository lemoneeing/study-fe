export interface ApiStructure{
    articles: Article[],
    status: string,
    totalResults: number;
}
export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {id: null, name: string}
    title: string;
    url: string;
    urlToImage: string;
}