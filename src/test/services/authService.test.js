/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { describe } from "@jest/globals";
import AuthService from "../../services/authService";
import Usuario from "../../models/usuario";
import bcryptjs from "bcryptjs";

const authService = new AuthService();

describe('Testando a authService,cadastrarUsuario', () => {
    it('O usuario deve possuir um nome, email e senha', async () => {
        //Arrage -> informações a validar
        const usuarioMock = {
            nome: "Giovanni",
            email: "giovanni@teste.com.br"
        }

        // act -> busca os dados da nossa função
        const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

        // assert -> compara o arrage com act
        await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatório!');
    })

    it('Ao cadastrar um usuário deve ser retornada uma mensagem informando que o usuário foi cadastrado', async () => {
        const usuarioMock = {
            nome: "Giovanni",
            email: "giovanni1@teste.com.br",
            senha: "123456"
        }
    
        const resultado = await authService.cadastrarUsuario(usuarioMock);
    
        expect(resultado.message).toEqual('usuario criado');
    
        await Usuario.excluir(resultado.content.id);
      });

    it('Não pode ser cadastrado um usuário com e-mail duplicado', async () => {
        const usuarioMock = {
            nome: "Giovanni",
            email: "giovanni@teste.com.br",
            senha: "123456"
        }

        const usuarioSalvo1 = authService.cadastrarUsuario(usuarioMock);

        await expect(usuarioSalvo1).rejects.toThrowError('Email já cadastrado.');
    })

    it('A senha do usuário precisa ser criptografada quando for salva no banco de dados', async () => {
        const data = {
          nome: 'John Doe',
          email: 'johndoe@example.com',
          senha: 'senha123',
        };
    
        const resultado = await authService.cadastrarUsuario(data);
        const senhaIguais = await bcryptjs.compare('senha123', resultado.content.senha);
    
        expect(senhaIguais).toStrictEqual(true);
    
        await Usuario.excluir(resultado.content.id);
      });

      it('Ao cadastrar um usuário, validar o retorno das informações do usuário', async () => {
        const data = {
          nome: 'John Doe',
          email: 'johndoe@example.com',
          senha: 'senha123',
        };
    
        const resultado = await authService.cadastrarUsuario(data);
    
        expect(resultado.content).toMatchObject(data);
    
        await Usuario.excluir(resultado.content.id);
      });
})
