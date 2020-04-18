export class TextbookRequest{
    author: string;
    edition: string;
    title: string;
    constructor(author: string,edition: string,title: string){
        this.author=author;
        this.edition=edition;
        this.title=title;
    }

}



export class Textbook extends TextbookRequest {
    subject: string;
    count: number;
}
