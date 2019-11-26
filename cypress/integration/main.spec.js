import dayjs from 'dayjs';

describe('Main View', () => {
  beforeEach(() => {
    cy.visit('localhost:4200')
  });

  it('should render main page with 2 children', () => {
    cy
      .get('.main-page').children().should('have.length', 2)
  });

  it('should render filters-wrapper with 4 children', () => {
    cy
      .get('.filters-wrapper').children().should('have.length', 2)
      .get('.filter').should(x => {
        expect(x).to.have.length(3);
        const ids = x.map((i, el) => {
          return Cypress.$(el).attr('id')
        })
        expect(ids.get()).to.deep.eq([
          'select-date',
          'select-topic',
          'select-sort'
        ])
      })
      .get('.filter-button').should('have.text', 'Clear')
  });

  it('should render articles with 20 children', () => {
    cy
      .get('.articles').children().should('have.length', 20)
  });

  it('should show one of the article on click', () => {
    cy
      .get('.articles')
      .find('.article-button')
      .first()
      .click()
      .get('.article').should('exist')
  });

  it('should filter out articles by date', () => {
    let today = dayjs();
    const weekAgo = today.subtract(7, 'day').format('YYYY-MM-DD');
    today = today.format('YYYY-MM-DD');
    cy
      .get('.filters')
      .get('select')
      .first()
      .select('week')
      .should('have.value', 'week')
      .get('.articles').children().should('have.length', 20)
  });

  it('should clear filters after click', () => {
    cy
      .get('.filters-wrapper')
      .get('.filter-button')
      .click()
      .get('.filters')
      .get('select')
      .first()
      .should('have.value', '') 
  });
});
