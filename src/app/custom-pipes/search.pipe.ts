import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  // pure: true,
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string) {
    console.log('Search Pipe...');
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}
