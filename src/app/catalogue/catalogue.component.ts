import { Component, OnInit } from '@angular/core';
import { Textbook } from '../classes/textbook';
import { TextbooksService } from '../backend/textbooks.service';




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

  constructor(private textbookService: TextbooksService) {}


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
    if(this.textbookService.hasTextbooks()){
          // this will get the data which was previously stored in the memory
          // and there will be no HTTP request
         
      this.textbooks = this.textbookService.getTextbooksCache();
      this.filteredTextbooks = this.textbooks;
    }else{
  
      this.textbookService.getTextbooksNew().subscribe((data) => {
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
        
        this.textbooks.sort(this.compare );
        this.textbookService.setTextbooks(this.textbooks);
        this.filteredTextbooks = this.textbooks;
      });
    }
  }



  ngOnInit(): void {
    this.retrieveTextbooks();
    
  }

  
}
