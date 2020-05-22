import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { LendsService } from '../services/lends.service';
import { Lend } from '../models/lend';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService, private lendsService: LendsService) {
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
      (data) => {
        this.lends = data;
        this.lends.sort(this.compare);
        this.lends = this.lends.filter(
          (lend) => !lend.active
        )
        this.filteredLends = this.listFilter
        ? this.performFilter(this.listFilter)
        : this.lends;
      }
    )
  }

  async ngOnInit() {
    this.retrieveLends();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

}
