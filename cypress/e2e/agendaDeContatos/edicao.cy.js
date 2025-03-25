/// <reference types="cypress" />

describe('Teste para edição de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('deve inserir um novo contato para ser editado', () => {
        cy.get('input[placeholder="Nome"]').type('Contato Teste')
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').type('99999999999')
        cy.get('.adicionar').click()
    })
    it('deve editar o contato recém-adicionado e salvar', () => {
        cy.contains('Contato Teste').parents('div.contato').find('.edit').click()

        cy.get('input[placeholder="Nome"]').clear().type('Contato Editado')
        cy.get('input[placeholder="E-mail"]').clear().type('editado@teste.com')
        cy.get('input[placeholder="Telefone"]').clear().type('88888888888')
        cy.get('.alterar').click()

        cy.contains('Contato Editado').parents('div.contato').then((contato) => {
                expect(contato.text()).to.include('Contato Editado')
                expect(contato.text()).to.include('editado@teste.com')
                expect(contato.text()).to.include('88888888888')
            })
    })
})