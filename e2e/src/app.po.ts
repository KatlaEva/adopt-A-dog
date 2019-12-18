import { LoginComponent } from './../../src/app/components/login/login.component';
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  login(email, password) {
    //element(by.id('LoginForm')).click();
    // browser.sleep(2000);
    element(by.id('email-input')).sendKeys(email);
    element(by.id('password-input')).sendKeys(password);
    element(by.id('login-button')).click();
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

}
