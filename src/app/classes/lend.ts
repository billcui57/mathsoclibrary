import { Student } from './student';
import { Textbook } from './textbook';

export class Lend{
    constructor(student:Student,textbook:Textbook,dateLent:string, id: string){
        this.student=student;
        this.textbook=textbook;
        this.dateLent=dateLent;
        this.id = id;
    }
    student: Student;
    textbook: Textbook;
    dateLent: string;
    id: string;
}