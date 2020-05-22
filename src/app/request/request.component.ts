import { Component, OnInit } from '@angular/core';
import { TextbookRequest } from '../models/textbook';
import { Router } from '@angular/router';
import { TextbooksService } from '../services/textbooks.service';
import { RequestsService } from '../services/requests.service';

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
    if(this.requestIsValid(this.request)){
      
      this.requestService.createRequests(this.request).subscribe();


      this._router.navigateByUrl("/thanks");
    }
  }
  
  ngOnInit(): void {
  }

}
