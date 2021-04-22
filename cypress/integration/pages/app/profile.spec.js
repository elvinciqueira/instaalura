/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject'
import ProfileScreenPageObject from '../../../../src/components/screens/app/ProfileScreen/ProfileScreen.pageObject'

describe('/pages/app/profile', () => {
  describe('when fill and submit a form login request', () => {
    describe('should go to the profile page and', () => {
      describe('when user click on "+" button', () => {
        it('opens a modal and should add an image to the feed', () => {
          //Pré Teste
          const imageUrl =
            'https://images.unsplash.com/photo-1577548696089-f7bcbc22f70e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'

          //Cenário
          const loginScreen = new LoginScreenPageObject(cy)
          loginScreen
            .fillLoginForm({user: 'elvinciqueira11', password: 'senhasegura'})
            .submitLoginForm()

          const profileScreen = new ProfileScreenPageObject(cy)
          profileScreen
            .openModal()
            .fillInputImageURL(imageUrl)
            .submitImageURL()
            .nextStep()
            .dragFilter()
            .selectFilter()
            .postImage()

          //Assertions
          cy.get('div#image-preview')
            .invoke('attr', 'style', `background-image:url(${imageUrl})`)
            .should('have.attr', 'style', `background-image:url(${imageUrl})`)

          cy.get('.carousel figure').should('have.class', 'filter-ashby')
          cy.get('div#image-preview').should('have.class', 'filter-ashby')

          cy.get('div > #feed-image.filter-ashby')
            .should('be.visible')
            .should('have.class', 'filter-ashby')
            .invoke('attr', 'style', `background-image:url(${imageUrl})`)
            .and('have.attr', 'style', `background-image:url(${imageUrl})`)
        })
      })
    })
  })
})
