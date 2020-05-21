import { Pipe, PipeTransform } from '@angular/core';
import { Lend } from '../models/lend';
import * as moment from 'moment';

@Pipe({
  name: 'isOverdue',
  pure: true
})
export class IsOverduePipe implements PipeTransform {

  transform(lend: Lend): string {
    let now = moment();
    let lendDate = moment(lend.dateLent, "MMMM-DD-YYYY");
    return(now.diff(lendDate,'days') > 14? "Yes" : "No")
  }

}
