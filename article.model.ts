export class Articles {

    status: string;

    totalResults: number;

    articles: Article[];

   

    constructor(status: string,totalResults: number,articles: Article[]){

    this.status=status;

    this.totalResults=totalResults;

    this.articles=articles;

    }

}
export class Article {

    author: string;

    content: string;

    description: string;

    publishedAt: string;

    source: Source;

    title: string;

    url: string;

    urlToImage: string;

   

    constructor(author: string,content: string,description: string,publishedAt: string,

        source: Source,title: string,url: string,urlToImage: string){

            this.author = author;

            this.content =content;

            this.description=description;

            this.urlToImage=urlToImage;

            this.url=url;

            this.title=title;

            this.source=source;

            this.publishedAt=publishedAt;

         }

    }

    export class Source {

        id: string;
    
        name: string;
    
       
    
        constructor(id: string, name: string){
    
            this.id =id;
    
            this.name = name;
    
        }
    
    }
    
       
    
    export const initialArticles: Articles = {
    
        status: '',
    
        totalResults: 0,
    
        articles: []
    
        }