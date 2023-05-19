import BasePage from "./Base.page.js";

class SearchResultsPage extends BasePage {
  static get url() {
    return "/#/search";
  }

  static get product() {
    return cy.get(".product");
  }

  static get header() {
    return cy.get("h1");
  }

  static get expandReviews() {
    return cy.get(".mat-expansion-panel");
  }

  static get reviewText() {
    return cy.get(".review-text");
  }

  static get closeProductButton() {
    return cy.get(".close-dialog");
  }
}

export default SearchResultsPage;
