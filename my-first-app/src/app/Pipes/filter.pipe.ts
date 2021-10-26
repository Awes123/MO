import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if (filterString === '' || propName === '') {
      //value.length === 0 ||
      return value;
    }
    for (const item in value) {
      if (value[item].City === filterString) {
        resultArray.push(value[item]);
      }
    }
    return resultArray as any;
  }
}
