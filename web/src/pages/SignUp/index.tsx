import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    try {

    } catch {
      
    }
  }

  return (
    <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={FiUser} type="name" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

      </Form>

      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
  )
};

export default SignUp;
