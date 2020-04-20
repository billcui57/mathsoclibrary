import { Component, OnInit } from '@angular/core';
import { Textbook } from '../interfaces/textbook';
import { ActivatedRoute, Router } from '@angular/router';
import { TextbooksService } from '../backend/textbooks.service';

@Component({
  selector: 'app-textbook-info',
  templateUrl: './textbook-info.component.html',
  styleUrls: ['./textbook-info.component.scss']
})
export class TextbookInfoComponent implements OnInit {

  textbookLoaded: Promise<boolean>;

  textbook: Textbook;
  id:string;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _textbookService: TextbooksService) {
  }

  sub;

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this._textbookService.getTextbooks().subscribe((data) => {
        let textbooks = data.map((e) => {
          return {
            title: e.payload.doc.data()['title'],
            author: e.payload.doc.data()['author'],
            edition: e.payload.doc.data()['edition'],
            subject: e.payload.doc.data()['subject'],
            count: e.payload.doc.data()['count'],
          } as Textbook;
        });
        this.textbook = textbooks.find(p => p.title == this.id);
        this.textbookLoaded = Promise.resolve(true);
      });
    });
  }
}
