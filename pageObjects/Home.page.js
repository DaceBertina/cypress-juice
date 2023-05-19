import BasePage from "./Base.page.js";

class HomePage extends BasePage {
  static get url() {
    return "/http://127.0.0.1:3000/#/";
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get(".mat-input-element");
  }

  static get itemsPerPageMenu() {
    return cy.get("mat-select[aria-label='Items per page:']");
  }

  static get menuOptions() {
    return cy.get(".mat-option-text");
  }

  static get product() {
    return cy.get(".product");
  }
}

export default HomePage;
