class BasePage {
  static get url() {
    return "http://127.0.0.1:3000/#/";
  }

  static visit() {
    cy.visit(this.url);
  }

  static get dismissButton() {
    return cy.get(".close-dialog");
  }

  static get meWantItButton() {
    return cy.get(".cc-dismiss");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }
}

export default BasePage;
