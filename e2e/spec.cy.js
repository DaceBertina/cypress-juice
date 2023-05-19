import RegistrationPage from "../pageObjects/Registration.page.js";
import HomePage from "../pageObjects/Home.page.js";
import LoginPage from "../pageObjects/Login.page.js";
import SearchResultsPage from "../pageObjects/SearchResults.page.js";

// describe("Saucedemo", () => {
//   beforeEach(() => {
//     LoginPage.visit();
//   });

describe("Juice-Shop scenarios", () => {
  context("With no login", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".close-dialog").click();
      cy.get(".cc-dismiss").click();
    });

    it("Registration", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.notYetCustomerLink.click();
      RegistrationPage.emailField.type(
        "test" + Math.floor(Math.random() * 10000) + "@test.com"
      );
      RegistrationPage.passwordField.type("12345678");
      RegistrationPage.repeatPasswordField.type("12345678");
      RegistrationPage.securityQuestionComboBox.click();
      RegistrationPage.securityQuestionComboBoxOptions
        .contains("Your favorite book?")
        .click();
      RegistrationPage.securityQuestionAnswerField.type("test");
      RegistrationPage.registrationButton.click();
      LoginPage.toastMessage.should(
        "have.text",
        "Registration completed successfully. You can now log in."
      );
    });
  });

  context("With Login", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.dismissButton.click();
      LoginPage.meWantItButton.click();
      LoginPage.logInto("demo", "demo");
    });

    it("Search for Lemon", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("lemon{enter}");
      SearchResultsPage.product.contains("Lemon Juice").click();
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml");
    });

    it.only("Search 500ml", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("500ml{enter}");
      SearchResultsPage.product.contains("Eggfruit Juice").click();
      SearchResultsPage.header.should("have.text", "Eggfruit Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
      SearchResultsPage.product.contains("Strawberry Juice").click();
      SearchResultsPage.header.should("have.text", "Strawberry Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
    });

    it.only("Filter product amount", () => {
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("12").click();
      HomePage.product.should("have.length", 12);
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("24").click();
      HomePage.product.should("have.length", 24);
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("36").click();
      HomePage.product.should("have.length", 35);
    });

    it.only("Validate item review", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("king{enter}");
      SearchResultsPage.product.contains("King of the Hill").click();
      cy.wait(200);
      SearchResultsPage.expandReviews.click();
      SearchResultsPage.reviewText.should(
        "contain.text",
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      );
    });
  });
});
