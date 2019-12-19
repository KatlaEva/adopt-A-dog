import { Dog } from './../../models/Dog';
import { FilterDog } from './dog.filter';
import { TestBed, async } from "@angular/core/testing";


/*
What we want to test:
1.0 Return empty array if array of dogs is empty while searching specific value

2.0 Find dogs by searching name

3.0 Don't find dogs when searching for something not in array

3.1. Return all dogs when search is empty string

4.0 Search for a negative number when searching for age
*/

const testData = [

    {dogName: 'Bella', dogAge: 8, race: 'Pug'},
    {dogName: 'Agnes', dogAge: 9, race: 'Golden Retriver'},
    {dogName: 'Eddie', dogAge: 2, race: 'DSG'},
    {dogName: 'Gremlin', dogAge: 1, race: 'Unknown'}

]

describe('Dog Filter', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FilterDog
            ],
        });
    });

    it('1.0 Return empty array if array of dogs is empty while searching specific value', () => {
        
        const filter = new FilterDog();
        const data = [];
        const search = 'Agnes';
        const expectedResult = [];

        const result = filter.transform(data, search);

        expect(result).toEqual(expectedResult);
    });

    it('2.0 Find dogs by searching name', () => {

        const filter = new FilterDog();
        const data = testData;
        const searchString = 'Bella';

        const expectedResult = [
            {dogName: 'Bella', 
            dogAge: 8, 
            race: 'Pug'}
        ];

        const result = filter.transform(data, searchString);

        expect(result).toEqual(expectedResult);
    });

    it('3.0 Dont find dogs when searching for something not in array', () => {

        const filter = new FilterDog();
        const data = testData;

        const searchString = 'NotADog'
        const expectedResult = []

        const result = filter.transform(data, searchString);

        expect(result).toEqual(expectedResult);

    });
  
    it('3.1 Return all dogs when search is undefined', () => {

        const filter = new FilterDog();
        const data = testData;

        const searchString = ''
        const expectedResult = data

        const result = filter.transform(data, searchString);

        expect(result).toEqual(expectedResult);

    });

    it('4.0 Search for a negative number when searching for age', () => {

        const filter = new FilterDog();
        const data = testData;

        const searchString = '-4'
        const expectedResult = data

        const result = filter.transform(data, searchString);

        expect(result).toEqual(expectedResult);

    });

})