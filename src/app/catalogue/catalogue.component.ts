import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { TextbooksService } from '../services/textbooks.service';
import { Textbook } from '../models/textbook';


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
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }


  compare(a: Textbook, b: Textbook): number {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }


  retrieveTextbooks() {
    this.textbookService.getTextbooks().subscribe(
      (data: Textbook[]) => {
        this.textbooks = data
        this.textbooks.sort(this.compare);
        this.filteredTextbooks = this.listFilter
          ? this.performFilter(this.listFilter)
          : this.textbooks;
      },
      (err: any) => console.log(err))
  }



  IncBookCount(textbookId: Number) {
    this.textbookService.incrementTextbookCount(textbookId).subscribe();
    window.location.reload();
  }

  DecBookCount(textbookId: Number) {
    this.textbookService.decrementTextbookCount(textbookId).subscribe();
    window.location.reload();
  }



  async ngOnInit() {
    this.retrieveTextbooks();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }


}
