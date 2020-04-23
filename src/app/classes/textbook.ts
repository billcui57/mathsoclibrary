export class TextbookRequest{
    author: string;
    publishedYear: number;
    isbn13: number;
    title: string;
    
    constructor(author: string,publishedYear: number,title: string, isbn13: number){
        this.author=author;
        this.publishedYear=publishedYear;
        this.title=title;
        this.isbn13=isbn13;
    }

}



export class Textbook extends TextbookRequest {
    subject: string;
    count: number;
    id: string;

    constructor(author: string,publishedYear: number,title: string, isbn13: number, subject: string, count: number, id: string){
        
        super(author,publishedYear,title, isbn13);
        this.subject = subject;
        this.count = count;
        this.id = id;
    }
}
