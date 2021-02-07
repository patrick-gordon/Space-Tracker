// NASA HOME PAGE
describe("GET APOD", function () {
  it("Gets APOD", () => {
    cy.visit("/nasa");

    cy.get(".svg-inline--fa.fa-arrow-alt-circle-right.fa-w-16.fa-5x").click();

    cy.url().should("include", "/apod");

    cy.get("h3").should("contain", "TITLE");
  });
});

// SPACEX HOMEPAGE
describe("GET spacex latest launch", () => {
  it("Naviagtes SPACEX homepage into latest launch page", () => {
    cy.visit("/spacex");

    cy.contains("Latest").click();

    cy.url().should("include", "/latestlaunch");

    cy.get("h3").should("contain", "NAME");
  });
});

describe("GET spacex upcoming launch", () => {
  it("Naviagtes SPACEX homepage into upcoming launch page", () => {
    cy.visit("/spacex");

    cy.contains("Upcoming").click();

    cy.url().should("include", "/upcominglaunch");

    cy.get("h1").should("contain", "Flights");

    cy.contains("Name").click();

    cy.get("h3").should("contain", "Name");
  });
});

describe('GET spacex  rockets', () => {
    it('Naviagtes SPACEX homepage into spacex rocket page', () => {
        cy.visit('/spacex')

        cy.contains('Rockets')
            .click()

        cy.url()
            .should('include', '/rockets')

        cy.get('h1')
            .should('contain', 'Rockets')

    })
})

describe('GET spacex  capsules', () => {
  it('Naviagtes SPACEX homepage into spacex capsules page', () => {
      cy.visit('/spacex')

      cy.contains('Capsules')
          .click()

      cy.url()
          .should('include', '/capsules')

      cy.get('h1')
          .should('contain', 'Capsules')

  })
})

describe('GET spacex  payloads', () => {
  it('Naviagtes SPACEX homepage into spacex payloads page', () => {
      cy.visit('/spacex')

      cy.contains('Payloads')
          .click()

      cy.url()
          .should('include', '/payloads')

      cy.get('h1')
          .should('contain', 'Payloads')

  })
})