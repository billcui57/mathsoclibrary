export interface TextbookRequest{
    author: string;
    edition: string;
    title: string;
}



export interface Textbook extends TextbookRequest {
    subject: string;
    count: number;
}
