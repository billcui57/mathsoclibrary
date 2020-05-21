import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { LendsService } from '../backend/lends.service';
import { Lend } from '../models/lend';
import { TextbooksService } from '../backend/textbooks.service';

@Component({
  selector: 'app-lend-status',
  templateUrl: './lend-status.component.html',
  styleUrls: ['./lend-status.component.scss']
})
export class LendStatusComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService, private lendsService: LendsService, private textbookService: TextbooksService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
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
        lend.student.id.toString().indexOf(filterBy) !== -1 ||
        lend.textbook.title.toLocaleLowerCase().toString().indexOf(filterBy) !== -1 ||
        lend.textbook.author.toLocaleLowerCase().toString().indexOf(filterBy) !== -1 ||
        lend.textbook.subject.toLocaleLowerCase().toString().indexOf(filterBy) !== -1 ||
        lend.textbook.isbn13.toString().toLocaleLowerCase().toString().indexOf(filterBy) !== -1
    );
  }

  returnTextbook(lend: Lend) {
    this.textbookService.incrementTextbookCount(lend.textbook.id).subscribe();
    this.lendsService.deleteLend(lend.id).subscribe();
    window.location.reload();
  }

  compare(a: Lend, b: Lend): number {
    if (a.textbook.title < b.textbook.title) {
      return -1;
    }
    if (a.textbook.title > b.textbook.title) {
      return 1;
    }
    return 0;
  }





  lends: Lend[];

  retrieveLends() {

    this.lendsService.getLends().subscribe(
      (data: Lend[]) => {
        this.lends = data;
        console.log(this.lends)
        this.lends.sort(this.compare);
        this.filteredLends = this.listFilter
          ? this.performFilter(this.listFilter)
          : this.lends;
      },
      (err: any) => console.log(err)
    )
  }

  async ngOnInit() {
    this.retrieveLends();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }


}
