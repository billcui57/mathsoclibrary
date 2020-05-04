import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { LendsService } from '../backend/lends.service';
import { Lend } from '../classes/lend';
import { RecordsService } from '../backend/records.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService, private recordsService: RecordsService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
   }


   filteredLends: Lend[] = [];
   _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {

    this._listFilter = value;
    this.filteredLends = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.lends;
    
  }

  performFilter(filterBy: string): Lend[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.lends.filter(
      (lend: Lend) =>
      lend.dateLent.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      lend.student.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      lend.student.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      lend.student.studentID.toString().indexOf(filterBy) !== -1||
      lend.textbook.title.toLocaleLowerCase().toString().indexOf(filterBy) !== -1||
      lend.textbook.author.toLocaleLowerCase().toString().indexOf(filterBy) !== -1||
      lend.textbook.subject.toLocaleLowerCase().toString().indexOf(filterBy) !== -1||
      lend.textbook.isbn13.toString().toLocaleLowerCase().toString().indexOf(filterBy) !== -1
    );
  }

 
  compare(a:Lend, b:Lend ) : number{
    if ( a.textbook.title < b.textbook.title ){
      return -1;
    }
    if ( a.textbook.title > b.textbook.title ){
      return 1;
    }
    return 0;
  }


 


   lends:Lend[];

  retrieveLends(){
    this.recordsService.getRecords().subscribe((data) => {
      this.lends = data.map((e)=>{
        return {
          textbook:e.payload.doc.data()['textbook'],
          student:e.payload.doc.data()['student'],
          dateLent:e.payload.doc.data()['dateLent'],
          id:e.payload.doc.id
        } as Lend;
      });
      this.lends.sort(this.compare );
      this.filteredLends = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.lends;
   
    })
   
  }

  async ngOnInit() {
    this.retrieveLends();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

}
