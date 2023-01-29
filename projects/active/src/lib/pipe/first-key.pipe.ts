import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstKey'
})
export class FirstKeyPipe implements PipeTransform {

  transform(value: any): string|null {
    if(!value)return null
    return Object.keys(value)[0];
  }

}
