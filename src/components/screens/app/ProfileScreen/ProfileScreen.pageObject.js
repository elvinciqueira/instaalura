export default class ProfileScreenPageObject {
  constructor(cy) {
    this.cy = cy
  }

  openModal() {
    this.cy.get('#header button[type="button"]').click()

    return this
  }

  fillInputImageURL(url) {
    this.cy.get('#formRecordImage input[type="url"]').type(url)

    return this
  }

  submitImageURL() {
    this.cy.get('#formRecordImage button[type="submit"]').click()

    return this
  }

  nextStep() {
    this.cy.get('#nextStepButton').click()

    return this
  }

  dragFilter() {
    this.cy.get('.carousel').trigger('dragstart')

    return this
  }

  selectFilter() {
    this.cy.get('.carousel > div .filter-ashby').trigger('drop').click()

    return this
  }

  postImage() {
    this.cy.get('#postButton').click()

    return this
  }
}
