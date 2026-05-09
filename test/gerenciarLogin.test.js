import { validarLoginComSucesso, validarUsuarioExpirado, validarDadosNaoCadastrados } from "../src/gerenciarLogin.js";
import assert from 'node:assert';

describe ('Testes de gerenciamento do Login', function(){

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

    it('Validar usuário com login expirado', function (){
        //arrange
        const id = 21;
        const loginExperido = true
        //act
        const retornoDaFuncao = validarUsuarioExpirado(id);

        //assert
        assert.equal(retornoDaFuncao, loginExperido);
    });
    
    it('Validar email não cadastrado', function (){
        //arrange
        const emailNaoCadastrado = 'nome@email.com.br'
        const senhaErrada = 123456
        //assert
        assert.throws(() => validarDadosNaoCadastrados(emailNaoCadastrado, senhaErrada),
            { message: 'O email informado não está cadastrado' }
        );

    });
    
    it('Validar senha incorreta', function (){
        //arrange
        const emailCadastrado = 'seninha_f1@senna.com.br'
        const senhaErrada = 123456
        //assert
        assert.throws(() => validarDadosNaoCadastrados(emailCadastrado, senhaErrada),
        { message: 'Senha incorreta' }
        );

    });

})