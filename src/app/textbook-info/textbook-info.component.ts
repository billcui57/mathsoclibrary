import { Component, OnInit } from '@angular/core';
import { Textbook } from '../classes/textbook';
import { ActivatedRoute, Router } from '@angular/router';
import { TextbooksService } from '../backend/textbooks.service';

@Component({
  selector: 'app-textbook-info',
  templateUrl: './textbook-info.component.html',
  styleUrls: ['./textbook-info.component.scss']
})
export class TextbookInfoComponent implements OnInit {

  textbookLoaded: Promise<boolean>;
  textbooks: Textbook[];
  textbook: Textbook;
  id: string;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _textbookService: TextbooksService) {
  }

  sub;

  

  retrieveTextbook() {
    if (this._textbookService.hasTextbooks()) {
      // this will get the data which was previously stored in the memory
      // and there will be no HTTP request

      this.textbooks = this._textbookService.getTextbooksCache();
      this.sub = this._Activatedroute.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.textbook = this.textbooks.find(p => p.title == this.id);
        this.textbookLoaded = Promise.resolve(true);
      });
    } else {

      this._textbookService.getTextbooksNew().subscribe((data) => {
        this.textbooks = data.map((e) => {
          return {
            title: e.payload.doc.data()['title'],
            author: e.payload.doc.data()['author'],
            publishedYear: e.payload.doc.data()['publishedYear'],
            isbn13: e.payload.doc.data()['isbn13'],
            subject: e.payload.doc.data()['subject'],
            count: e.payload.doc.data()['count'],
          } as Textbook;
        });
        console.log(this.textbooks);
        this._textbookService.setTextbooks(this.textbooks);
        this.sub = this._Activatedroute.paramMap.subscribe(params => {
          this.id = params.get('id');
          this.textbook = this.textbooks.find(p => p.title == this.id);
          this.textbookLoaded = Promise.resolve(true);
        });
      });

    }
      
  }




  ngOnInit(): void {
    this.retrieveTextbook();



  }
}
