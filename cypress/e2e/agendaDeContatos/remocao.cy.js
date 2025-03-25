/// <reference types="cypress" />

describe('Teste para remoção de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('deve inserir um novo contato para ser removido', () => {
        cy.get('input[placeholder="Nome"]').type('Contato remocao')
        cy.get('input[placeholder="E-mail"]').type('teste@remocao.com')
        cy.get('input[placeholder="Telefone"]').type('00000000000')
        cy.get('.adicionar').click()
    })
    it('deve remover o contato e validar com expect', () => {

        cy.contains('Contato remocao').parents('div.contato').find('.delete').click()

        cy.contains('Contato remocao').should('not.exist')

        cy.get('div.contato').then((contatos) => {
            expect(contatos.text()).to.not.include('Contato remocao')
            expect(contatos.text()).to.not.include('teste@remocao.com')
            expect(contatos.text()).to.not.include('00000000000')
        })
    })
})