import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import Input from '../../shared/components/input';

import Button from '../../shared/components/button';

import { Container, Content, Background, AnimationContainer } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
    <AnimationContainer>
      <img src={logoImg} alt="GoBarber"/>

      <form action="">
        <h1>Faça seu login</h1>

        <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form> 

        <a href="">
          <FiLogIn />
          Criar conta
        </a>
    </AnimationContainer>
    </Content>

    <Background/>
  </Container>
)

export default SignIn;