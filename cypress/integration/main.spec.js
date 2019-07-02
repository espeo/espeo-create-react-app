import { cyan } from 'ansi-colors';

describe('Main View', () => {
  it('should render title and button', () => {
    cy
      .visit('localhost:4201')
      .get('h1').should('have.text', 'Hello World!')
      .get('button').should('exist');
  });
});
