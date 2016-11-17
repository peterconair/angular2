export class News {

    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage :string;
    publishedAt :string;

    constructor(author:string , title :string,description: string , url: string , urlToImage :string,publishedAt :string) {
        this.author = author ;
        this.title = title;
        this.description = title;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
    }
}
