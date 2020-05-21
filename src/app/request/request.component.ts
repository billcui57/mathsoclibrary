import { Component, OnInit } from '@angular/core';
import { TextbookRequest } from '../models/textbook';
import { Router } from '@angular/router';
import { TextbooksService } from '../backend/textbooks.service';
import { RequestsService } from '../backend/requests.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private _router: Router,private requestService: RequestsService) { }

  request = new TextbookRequest("",null,"",null);

  validRequest:boolean = false;

  requestIsValid(request: TextbookRequest): boolean{
    //TODO: implement
    return true;
  }

  onSubmit(){
    console.log("hello");
    if(this.requestIsValid(this.request)){
      
      this.requestService.createRequests(this.request);


      this._router.navigateByUrl("/thanks");
    }
  }
  
  ngOnInit(): void {
  }

}
