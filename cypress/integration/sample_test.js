// NASA HOME PAGE
describe('GET APOD', function(){
    it('Gets APOD', () => {
        cy.visit('/nasa')

        cy.get('.svg-inline--fa.fa-arrow-alt-circle-right.fa-w-16.fa-5x')
            .click()

        cy.url()
            .should('include', '/apod')

        cy.get('h3')
            .should('contain', 'Solar')
    })
})

// SPACEX HOMEPAGE

describe('GET spacex latest launch', () => {
    it('Naviagtes SPACEX homepage into latest launch page', () => {
        cy.visit('/spacex')

        cy.contains('Latest')
            .click()

        cy.url()
            .should('include', '/latestlaunch')

        cy.get('h3')
            .should('contain', 'Turksat')

    })
})

describe('GET spacex upcoming launch', () => {
    it('Naviagtes SPACEX homepage into upcoming launch page', () => {
        cy.visit('/spacex')

        cy.contains('Upcoming')
            .click()

        cy.url()
            .should('include', '/upcominglaunch')

        cy.get('h1')
            .should('contain', 'Flights')

    })
})


// describe('GET spacex latest launch', () => {
//     it('Naviagtes SPACEX homepage into latest launch page', () => {
//         cy.visit('/spacex')

//         cy.contains('Latest')
//             .click()

//         cy.url()
//             .should('include', '/latestlaunch')

//         cy.get('h3')
//             .should('contain', 'Turksat')

//     })
// })