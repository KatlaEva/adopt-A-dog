 
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Dog } from '../../models/Dog'

@Pipe({name: 'filterDog'})
@Injectable()
export class FilterDog implements PipeTransform {

    transform(items: Dog[], search: any): any {
        console.log(search);
        console.log(items);

        if (search === undefined) {
            return items;
        }

        search = search.toLowerCase();
        return items.filter(dog => dog.dogName && dog.dogName.toLowerCase().includes(search) || 
        dog.race && dog.race.toLowerCase().includes(search) || 
        dog.dogAge && dog.dogAge == search);
    }


}
