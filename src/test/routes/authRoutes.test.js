/* eslint-disable indent */
/* eslint-disable spaced-comment */
import request from 'supertest';
import {
  describe, expect, it,
} from '@jest/globals';
import app from '../../app.js';

//iniciando o servidor
let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

//fecha o servidor
afterEach(() => {
  server.close();
});

describe('Testando a rota de login (POST)', () => {
  it('O login deve possuir um email e senha para se autenticar', async () => {
    const loginMock = {
      email: 'giovanni@teste.com',
    };

    await request(server)
      .post('/login')
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });

  it('O login deve validar se o usuário está cadastrado', async () => {
    const loginMock = {
      email: 'raphael.teste@teste.com.br',
      senha: '123456',
    };
    await request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(500)
      .expect('"Usuario não cadastrado."');
  });

  it('O login deve validar email e senha incorreto', async () => {
    const loginMock = {
      email: 'raphael@teste.com.br',
      senha: '12345',
    };
    await request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(500)
      .expect('"Usuario ou senha invalido."');
  });

  it('O login deve validar se está sendo retornado um accessToken', async () => {
    const loginMock = {
      email: 'raphael@teste.com.br',
      senha: '123456',
    };
    const resposta = await request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(201);
    expect(resposta.body.message).toBe('Usuario conectado');
    expect(resposta.body).toHaveProperty('accessToken');
  });
});
