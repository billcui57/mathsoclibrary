import { Component, OnInit } from '@angular/core';
import { Lend } from '../classes/lend';
import { Textbook } from '../classes/textbook';
import { ActivatedRoute, Router } from '@angular/router';
import { TextbooksService } from '../backend/textbooks.service';
import { Student } from '../classes/student';
import * as moment from 'moment';
import { LendsService } from '../backend/lends.service';
import { RecordsService } from '../backend/records.service';

@Component({
  selector: 'app-lendbook',
  templateUrl: './lendbook.component.html',
  styleUrls: ['./lendbook.component.scss']
})
export class LendbookComponent implements OnInit {



  textbookLoaded: Promise<boolean>;
  textbooks: Textbook[];
  textbook: Textbook;
  lendInfo: Lend = new Lend(new Student("", "", null), this.textbook, moment().format("MMMM Do YYYY"), null);
  id: string;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _textbookService: TextbooksService,
    private lendService: LendsService,
    private recordService: RecordsService) {
  }

  sub;


  onSubmit() {
    if (this.lendInfo.textbook.count > 0) {
     this._textbookService.decrementTextbookCount(this.lendInfo.textbook)
      this.lendService.createLend(this.lendInfo);
      this.recordService.createRecord(this.lendInfo);
      
      this._router.navigateByUrl("/catalogue");
    }


  }




  retrieveTextbook() {


    this._textbookService.getTextbooksNew().subscribe((data) => {
      this.textbooks = data.map((e) => {
        return {
          title: e.payload.doc.data()['title'],
          author: e.payload.doc.data()['author'],
          publishedYear: e.payload.doc.data()['publishedYear'],
          isbn13: e.payload.doc.data()['isbn13'],
          subject: e.payload.doc.data()['subject'],
          count: 1,
          id: e.payload.doc.id
        } as Textbook;
      });
      this._textbookService.setTextbooks(this.textbooks);
      this.sub = this._Activatedroute.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.textbook = this.textbooks.find(p => p.title == this.id);
        this.textbookLoaded = Promise.resolve(true);
        this.lendInfo.textbook = this.textbook;
      });
    });

  }






  ngOnInit(): void {
    this.retrieveTextbook();



  }
}
