/*
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
id, nome, email, senha e expirado (boleano, pode ser true ou false). 

Adicione ao menos um dos usuarios como expirado sendo true.
*/

const usuarios = [
    {
        id: 8, 
        nome: 'Harthur Asssis da Conceição', 
        email: 'hartassis@test.com', 
        senha: 'senha_Didicil_123',
        expirado: false
    },
    {
        id: 21, 
        nome: 'Maria das Graças das Dores', 
        email: 'gracas_dores@test.com', 
        senha: 'senha.123',
        expirado: true
    },
    {
        id: 22, 
        nome: 'Senor Abravanel', 
        email: 'sr_abravanel@sbt.com', 
        senha: 'quem_quer_dinheiro',
        expirado: false
    },
    {
        id: 45, 
        nome: 'Airton Senna', 
        email: 'seninha_f1@senna.com.br', 
        senha: 'tambulero_93',
        expirado: false
    },
    {
        id: 46, 
        nome: 'João Batista', 
        email: 'o_batista@mail.com', 
        senha: 'so_Jesus_salva',
        expirado: false
    },
    {
        id: 47, 
        nome: 'Gabriel Barbosa', 
        email: 'gabi_gol@teste.com.br', 
        senha: 'mengao_2019',
        expirado: true
    },
    {
        id: 52, 
        nome: 'Micaela Alves', 
        email: 'mikaalves123@mail.com', 
        senha: '5550123_senha',
        expirado: false
    },
]

/*
Desafio:
Construa uma função de para realizar login. 
Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso 
caso exista um usuário com email e senha iguais aos informados. 

*/
export function validarLoginComSucesso(id){

    for (let i = 0;i < usuarios.length; i++) {
        
        if (usuarios[i].id == id) {
            return {
                email: usuarios[i].email,
                senha: usuarios[i].senha,  
                mensagem: 'O login foi realizado com sucesso!'       
            }
        }
    } 
};

export function validarUsuarioExpirado(id){

    for (let i = 0;i < usuarios.length; i++) {
        
        if (usuarios[i].expirado == true) {
            return usuarios[i].expirado 
        }

        
    } 
};

export function validarDadosNaoCadastrados(email, senha) {
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    throw new Error('O email informado não está cadastrado');
  }

  if (usuario.senha !== senha) {
    throw new Error('Senha incorreta');
  }

  if (usuario.email === email && usuario.senha === senha){
    console.log('O login foi realizado com sucesso!');
  };
}



