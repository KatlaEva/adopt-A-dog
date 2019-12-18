 
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
        return items.filter(dog => dog.dogName && dog.dogName.toLocaleLowerCase().includes(search) || 
        dog.race && dog.race.toLocaleLowerCase().includes(search) || 
        dog.dogAge && dog.dogAge >= search);
    }


}
