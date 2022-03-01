import { Pipe, PipeTransform } from '@angular/core';
import { FoodsService } from './pages/services/foods.service';

@Pipe({
  name: 'searchbar'
})
export class SearchbarPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
