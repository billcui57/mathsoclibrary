import { Student } from './student';
import { Textbook } from './textbook';

export class Lend{
    constructor(student:Student,textbook:Textbook,dateLent:string){
        this.student=student;
        this.textbook=textbook;
        this.dateLent=dateLent;
    }
    student: Student;
    textbook: Textbook;
    dateLent: string;
}