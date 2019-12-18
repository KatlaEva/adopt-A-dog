import { AppPage } from './app.po';
import { browser, element, by, protractor } from 'protractor';

describe('Add Dog', ()=> {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('Should add a new dog to the database', () => {
        browser.get('Login');

        element(by.id('addDog')).click();

        element.all(by.css(''))


    })

})