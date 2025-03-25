/// <reference types="cypress" />

describe('Teste para inclusão de novo contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve inserir um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('Contato Teste')
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').type('99999999999')
        cy.get('.adicionar').click()

        cy.get('div.contato').then((contato) => {
            expect(contato.text()).to.include('Contato Teste')
        })
    })
})