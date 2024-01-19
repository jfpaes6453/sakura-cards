describe('ButtonComponent', () => {

    it('should navigate to the specified URL when clicked', () => {
        cy.visit('http://localhost:3000');

        const url = 'http://localhost:3000/choose-card';
        const buttonText = 'Empezar';

        cy.contains(buttonText).click();

        cy.url().should('eq', url);
    });
});