import BasePage from "./Base.page.js";

class LoginPage extends BasePage {
  // static visit() {
  //   return "http://127.0.0.1:3000/#/";
  // }

  static get url() {
    return "http://127.0.0.1:3000/#/login";
  }

  static visit() {
    cy.visit(this.url);
  }

  static get notYetCustomerLink() {
    return cy.get("#newCustomerLink");
  }

  static get toastMessage() {
    return cy.get(".mat-simple-snack-bar-content");
  }

  static get emailField() {
    return cy.get("#email");
  }

  static get passwordField() {
    return cy.get("#password");
  }

  static get loginButton() {
    return cy.get("#loginButton");
  }
  static logInto(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}

export default LoginPage;
