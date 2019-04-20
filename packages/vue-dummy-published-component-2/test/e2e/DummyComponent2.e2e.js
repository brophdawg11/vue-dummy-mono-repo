describe('DummyComponent2', () => {

    it('Renders Hello World 2', () => {
        cy.visit('storybook-static/index.html');
        cy.get('#dummycomponent2').click();
        cy.get('#dummycomponent2--usage').click();
        cy.get('#storybook-preview-iframe')
            .then($iframe => cy.wrap($iframe.contents().find('body')).as('iframe'));
        cy.get('@iframe').find('h1.heading').should('contain', 'Hello World 2!');
    });

});
