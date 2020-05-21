import { Component, OnInit } from '@angular/core';
import { Lend } from '../models/lend';
import { Textbook } from '../models/textbook';
import { ActivatedRoute, Router } from '@angular/router';
import { TextbooksService } from '../backend/textbooks.service';
import { Student } from '../models/student';
import * as moment from 'moment';
import { LendsService } from '../backend/lends.service';

@Component({
  selector: 'app-lendbook',
  templateUrl: './lendbook.component.html',
  styleUrls: ['./lendbook.component.scss']
})
export class LendbookComponent implements OnInit {



  textbookLoaded: Promise<boolean>;
  textbook: Textbook;
  lendInfo: Lend = new Lend(new Student("", "", null), this.textbook, moment().format("MMMM Do YYYY"), null, true);

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private textbookService: TextbooksService,
    private lendService: LendsService) {
  }



  onSubmit() {
    if (this.textbook.count) {
      this.textbookService.decrementTextbookCount(this.textbook.id).subscribe();
      this.lendService.createLend(this.lendInfo).subscribe();
      this._router.navigateByUrl("/catalogue");
    }


  }




  retrieveTextbook() {
    const id = this._Activatedroute.snapshot.params['id'];
    this.textbookService.getTextbookById(id).subscribe(
      (data: Textbook) => {
        this.textbook = data;
        this.textbookLoaded = Promise.resolve(true);
        this.lendInfo.textbook = this.textbook;
      },
      (err: any) => console.log(err),
    )
  }





  ngOnInit(): void {
    this.retrieveTextbook();



  }
}
