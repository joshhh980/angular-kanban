import { Pipe, PipeTransform } from '@angular/core';
import parameterize from 'parameterize-js';

@Pipe({
  name: 'parameterize'
})
export class ParameterizePipe implements PipeTransform {

  transform(value: string): string {
    return parameterize(value);
  }

}
