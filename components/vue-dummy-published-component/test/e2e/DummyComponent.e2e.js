describe('DummyComponent', () => {

    it('Renders Hello World', () => {
        cy.visit('storybook-static/index.html');
        cy.get('#explorerdummycomponent--usage').click();
        cy.get('#storybook-preview-iframe')
            .then($iframe => cy.wrap($iframe.contents().find('body')).as('iframe'));
        cy.get('@iframe').find('h1.heading').should('contain', 'Hello World!');
    });

});
