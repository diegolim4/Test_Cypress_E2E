describe('Conduit Cadastro',() =>{
  const usuario = 'usuario'+(new Date()).getTime()
  const senha = 'senha'+(new Date()).getTime()

  it ('Novo Usuário', () =>{
    cy.visit('/register')
    cy.get('[formcontrolname=username]').type(usuario)
    cy.get('[formcontrolname=email]').type(usuario+'@email.com')
    cy.get('[formcontrolname=password]').type(senha)
    cy.get('.btn').click()
    cy.contains('.nav-item:nth-child(4) > .nav-link', usuario)
  .should('be.visible')

  })
    it ('Usuário existente', () =>{
      cy.visit('/register')
      cy.get('[formcontrolname=username]').type(usuario)
      cy.get('[formcontrolname=email]').type(usuario+'@email.com')
      cy.get('[formcontrolname=password]').type(senha)
      cy.get('.btn').click()
      cy.contains('.nav-item:nth-child(4) > .nav-link', usuario)
    .should('not.be.empty')
    })
})



/*
    cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click()
    cy.get('.row').click()
    cy.get('.ng-valid').click()
    cy.get('.ng-valid').type('diegolima')
    cy.get('.form-group:nth-child(2) > .form-control').type('{backspace}')
    cy.get('.form-group:nth-child(2) > .form-control').type('{backspace}')
    cy.get('.form-group:nth-child(2) > .form-control').type('lima.j.diego@gmail.com')
    cy.get('.ng-untouched').type('amocafe')
    cy.get('.btn').click()
    cy.get('.ng-dirty:nth-child(4)').submit();*/
