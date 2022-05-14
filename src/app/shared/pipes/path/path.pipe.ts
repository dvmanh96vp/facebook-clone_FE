import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Pipe({
  name: 'path'
})
export class PathPipe implements PipeTransform {

  transform(value: string): unknown {
    return environment.path + '/' + value;
  }

}
