/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject'

describe('/pages/app/login', () => {
  it('should type input and redirect to /app/profile', () => {
    //Pré Teste
    cy.intercept('https://instalura-api.vercel.app/api/login').as('userLogin')

    //Cenário
    const loginScreen = new LoginScreenPageObject(cy)
    loginScreen
      .fillLoginForm({user: 'elvinciqueira', password: 'senhasegura'})
      .submitLoginForm()

    //Asserções
    cy.url().should('include', '/app/profile')

    cy.wait('@userLogin').then((intercept) => {
      const {token} = intercept.response.body.data

      cy.getCookie('APP_TOKEN')
        .should('exist')
        .should('have.property', 'value', token)
    })
  })
})
