import { Component, OnInit } from '@angular/core';
import { Textbook } from '../classes/textbook';
import { TextbooksService } from '../backend/textbooks.service';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  textbooks: Textbook[];
  filteredTextbooks: Textbook[] = [];

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTextbooks = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.textbooks;
  }

  performFilter(filterBy: string): Textbook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.textbooks.filter(
      (textbook: Textbook) =>
        textbook.title.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        textbook.author.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        textbook.subject.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService, private textbookService: TextbooksService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }


  compare(a:Textbook, b:Textbook ) : number{
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }


  retrieveTextbooks(){
   
      this.textbookService.getTextbooksNew().subscribe((data) => {
        this.textbooks = data.map((e) => {
          return {
            title: e.payload.doc.data()['title'],
            author: e.payload.doc.data()['author'],
            publishedYear: e.payload.doc.data()['publishedYear'],
            isbn13: e.payload.doc.data()['isbn13'],
            subject: e.payload.doc.data()['subject'],
            count: e.payload.doc.data()['count'],
            id: e.payload.doc.id
          } as Textbook;
        });
        
        this.textbooks.sort(this.compare );
        this.textbookService.setTextbooks(this.textbooks);
        this.filteredTextbooks = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.textbooks;
      });
    
  }



IncBookCount(textbook: Textbook){
  this.textbookService.incrementTextbookCount(textbook);
}

DecBookCount(textbook: Textbook){
  this.textbookService.decrementTextbookCount(textbook);
}



  async ngOnInit() {
    this.retrieveTextbooks();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  
}
