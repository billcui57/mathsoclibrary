import { Component, OnInit } from '@angular/core';
import { TextbookRequest } from '../interfaces/textbook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private _router: Router) { }

  request = new TextbookRequest("","","");

  validRequest:boolean = false;

  requestIsValid(request: TextbookRequest): boolean{
    //TODO: implement
    return false;
  }

  onSubmit(){
    console.log("hello");
    if(this.requestIsValid(this.request)){
      



      this._router.navigateByUrl("/thanks");
    }
  }
  
  ngOnInit(): void {
  }

}
