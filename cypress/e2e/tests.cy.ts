it('works', () => {
  const screenshotOption = {
    disableTimersAndAnimations: false,
    overwrite: true
  }

  cy.visit('http://localhost:8080/', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        value: 'fr'
      })
    }
  })

  cy.scrollTo('bottom', { duration: 50 })
  cy.get('.skill-icon').find('img').should('be.visible')
  cy.get('body').screenshot('main-page-at-start', screenshotOption)

  describe('test main page', () => {
    cy.get('.app-header input')
      .type('test mail')
      .should('have.value', 'test mail')
    cy.get('.v-expansion-panel-title').click({ multiple: true })
    cy.get('.v-expansion-panel-text').should('not.be.visible')

    cy.scrollTo('bottom', { duration: 50 })
    cy.get('body').screenshot('main-page-closed-list', screenshotOption)
  })

  describe('test about page', () => {
    cy.get('a[href="/about"]').click()
    cy.location('pathname').should('eq', '/about')
    cy.get('.app-header input').should('have.value', 'test mail')

    cy.scrollTo('bottom', { duration: 50 })
    cy.get('body').screenshot('about-page', screenshotOption)
  })

  describe('go back to main page', () => {
    cy.go('back')
    cy.location('pathname').should('eq', '/')
    cy.get('.app-header input').should('have.value', 'test mail')
    cy.get('.v-expansion-panel-text').should('be.visible')

    cy.scrollTo('bottom', { duration: 50 })
    cy.get('body').screenshot('main-page-opened-list', screenshotOption)
  })

  //   describe('test mail', () => {
  //     cy.get('.app-header input').type('{enter}')
  //   })
})
