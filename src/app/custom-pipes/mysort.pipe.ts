import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure: false,
})
export class MysortPipe implements PipeTransform {
  transform(arr: number[]) {
    console.log('MySOrt Pipe....');
    return arr.sort((a, b) => a - b);
  }
}
