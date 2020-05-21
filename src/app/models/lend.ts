import { Student } from './student';
import { Textbook } from './textbook';

export class Lend{
    constructor(student:Student,textbook:Textbook,dateLent:string, id: number, active:boolean){
        this.student=student;
        this.textbook=textbook;
        this.dateLent=dateLent;
        this.id = id;
        this.active = active;
    }
    student: Student;
    textbook: Textbook;
    dateLent: string;
    id: number;
    active: boolean;
}

export class LendCompressedForPosting{
    //no lend id as that value is given by the database. It is unknown beforehand.
    constructor(studentId: number, textbookId: number, dateLent: string, active: boolean) {
        this.studentId=studentId;
        this.textbookId=textbookId;
        this.dateLent=dateLent;
        this.active = active;
    }

    studentId: number;
    textbookId: number;
    dateLent: string;
    active: boolean;
}