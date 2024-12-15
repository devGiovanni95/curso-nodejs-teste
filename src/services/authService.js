/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable space-before-blocks */
/* eslint-disable no-param-reassign */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import Usuario from '../models/usuario.js';
import constants from '../config/constants.js';

class AuthService {
  async login(data) {
    try {
      if (!data.email) {
        throw new Error('O email do usuario é obrigatório.');
      }
  
      if (!data.senha) {
        throw new Error('A senha de usuario é obrigatório.');
      }

      const usuario = await Usuario.pegarPeloEmail(data.email);

      if (!usuario) {
        throw new Error('Usuario não cadastrado.');
      }

      const senhaIguais = await bcryptjs.compare(data.senha, usuario.senha);

      if (!senhaIguais) {
        throw new Error('Usuario ou senha invalido.');
      }

      const accessToken = jsonwebtoken.sign({
        id: usuario.id,
        email: usuario.email,
      }, constants.jsonSecret, {
        expiresIn: 86400,
      });

      return { message: 'Usuario conectado', accessToken };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async cadastrarUsuario(data) {

    try {
      //refatorando para cobrir o teste feito
      if (!data.senha){
        throw new Error('A senha de usuário é obrigatório!');
      }
      data.senha = await bcryptjs.hash(data.senha, 8);
      const confereEmail = await Usuario.pegarPeloEmail(data.email);

      if (confereEmail) {
        throw new Error('Email já cadastrado.');
      }
      const usuario = new Usuario(data);
      const resposta = await usuario.salvar(usuario);
      return { message: 'usuario criado', content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default AuthService;
