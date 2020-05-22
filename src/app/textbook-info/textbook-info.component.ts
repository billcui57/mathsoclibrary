import { Component, OnInit } from '@angular/core';
import { Textbook } from '../models/textbook';
import { ActivatedRoute, Router } from '@angular/router';
import { TextbooksService } from '../services/textbooks.service';

@Component({
  selector: 'app-textbook-info',
  templateUrl: './textbook-info.component.html',
  styleUrls: ['./textbook-info.component.scss']
})
export class TextbookInfoComponent implements OnInit {

  textbookLoaded: Promise<boolean>;
  textbook: Textbook;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private textbookService: TextbooksService) {
  }



  retrieveTextbook() {
    const id = this._Activatedroute.snapshot.params['id'];
    this.textbookService.getTextbookById(id).subscribe(
      (data: Textbook) => {
        this.textbook = data;
        this.textbookLoaded = Promise.resolve(true);
      },
      (err: any) => console.log(err),
    )
  }






  ngOnInit(): void {
    this.retrieveTextbook();



  }
}
