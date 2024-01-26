describe('ButtonComponent', () => {

    it('should navigate to the specified URL when clicked', () => {
        cy.visit('http://localhost:3000');

        const url = 'http://localhost:3000/id-name';
        const buttonText = 'Empezar';

        cy.contains(buttonText).click();

        cy.url().should('eq', url);
    });

    it('Should write name to input', () => {
        cy.visit('http://localhost:3000/id-name')
        cy.clock(Date.now(), ['Date'])
        cy.wait(1000)
        cy.get('#nameId').type('FemCoder', { force: true })
        const buttonSubmit = 'Empezar Tirada';
        cy.wait(1000)
        cy.contains(buttonSubmit).click();
        const url = 'http://localhost:3000/choose-card';
        cy.url().should('eq', url);
    })
});


