import { Component, OnInit } from '@angular/core';
import { Textbook } from '../interfaces/textbook';
import { TextbooksService } from '../server/textbooks.service';

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

  ngOnInit(): void {
    this.textbookService.getTextbooks().subscribe((data) => {
      this.textbooks = data.map((e) => {
        return {
          title: e.payload.doc.data()['title'],
          author: e.payload.doc.data()['author'],
          edition: e.payload.doc.data()['edition'],
          subject: e.payload.doc.data()['subject'],
          count: e.payload.doc.data()['count'],
        } as Textbook;
      });
      this.filteredTextbooks = this.textbooks;
    });
  }

  create(book: Textbook) {
    this.textbookService.createTextbook(book);
  }

  update(book: Textbook) {
    this.textbookService.updateTextbook(book);
  }

  delete(title: string) {
    this.textbookService.deleteTextbook(title);
  }
}
