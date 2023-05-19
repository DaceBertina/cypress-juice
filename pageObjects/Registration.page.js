import BasePage from "./Base.page.js";

class RegistrationPage extends BasePage {
  static get url() {
    return "/#/register";
  }

  static get emailField() {
    cy.get("#emailControl");
  }

  static get passwordField() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordField() {
    return cy.get("#passwordControl");
  }

  static get securityQuestionComboBox() {
    return cy.get('mat-select-[role="combobox"]');
  }

  static get securityQuestionComboBoxOptions() {
    return cy.get(".mat-option-text");
  }

  static get securityQuestionAnswerField() {
    return cy.get("#securityAnswerControl");
  }
}

export default RegistrationPage;
