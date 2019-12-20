import { AppPage } from './app.po';
import { browser, element, by, protractor } from 'protractor';


describe('Login tests', ()=> {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('Should test that e2e works', ()=> {
        browser.get('');
        element(by.id('loginDashboard')).click();
        expect(element(by.className('nav-link')).getText()).toEqual('Dog List');

        expect(true).toBeTruthy();
    })

    it('Login Form should be valid', ()=> {
        browser.get('login')

        page.login('harpa@test.com', 'tester1234*');

        expect(element(by.className('nav-link')).getText()).toEqual('Dog Listng');

    });

});