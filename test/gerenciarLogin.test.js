import { validarLoginComSucesso, validarUsuarioExpirado, validarDadosNaoCadastrados, validarLoginMelhorado } from "../src/gerenciarLogin.js";
import assert from 'node:assert';

describe ('Testes de gerenciamento do Login', function(){

/*
*      ------ Validar login ------
*/
    it('Validar que uma mensagem é apresentada ao realizar login com sucesso', function (){
        //arrange
        const id = 8;
        const emailEsperado =  'hartassis@test.com';
        const senhaEsperada = 'senha_Didicil_123';

        //act
        const retornoDaFuncao = validarLoginComSucesso(id);

        //assert
        assert.equal(retornoDaFuncao.email, emailEsperado);
        assert.equal(retornoDaFuncao.senha, senhaEsperada);
        assert.equal(retornoDaFuncao.mensagem, 'O login foi realizado com sucesso!');
        
    }); 

/*
*      ------ Validar login expirado ------
*/
    it('Validar usuário com login expirado', function (){
        //arrange
        const id = 21;
        const loginExperido = true
        //act
        const retornoDaFuncao = validarUsuarioExpirado(id);

        //assert
        assert.equal(retornoDaFuncao, loginExperido);
    });


/*
*      ------ Validar Email nao cadastrado ------
*/
    it('Validar email não cadastrado', function (){
        //arrange
        const emailNaoCadastrado = 'nome@email.com.br'
        const senhaErrada = 123456
        //assert
        assert.throws(() => validarDadosNaoCadastrados(emailNaoCadastrado, senhaErrada),
            { message: 'O email informado não está cadastrado' }
        );

    });
    
/*
*      ------ Validar Senha incorreta ------
*/
    it('Validar senha incorreta', function (){
        //arrange
        const emailCadastrado = 'seninha_f1@senna.com.br'
        const senhaErrada = 123456
        //assert
        assert.throws(() => validarDadosNaoCadastrados(emailCadastrado, senhaErrada),
        { message: 'Senha incorreta' }
        );

    });


/*
*      ------ Validar login melhorado ------
*/
    it('Deve retornar "Usuário logado com sucesso!" quando o usuario com login e senha for encontrado', function (){
        //arrange
        const resultado = validarLoginMelhorado('seninha_f1@senna.com.br','tambulero_93')
    
        //assert
        assert.equal(resultado,'Usuário logado com sucesso!')

    });

    it('Deve retornar "Usuário não encontrado" quando o usuario não for encontrado', function (){
        //arrange
        const resultado = validarLoginMelhorado('joao.estrela@senna.com.br','12393')
    
        //assert
        assert.equal(resultado,'Usuário não encontrado')

    });


})