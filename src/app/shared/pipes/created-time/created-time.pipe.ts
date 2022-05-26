import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'createdTime'
})
export class CreatedTimePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }
  transform(value: string): string {
    const time  = this.datePipe.transform(value, 'dd/MM/yyy HH:mm:ss') as string;
    return time;
  }

}
