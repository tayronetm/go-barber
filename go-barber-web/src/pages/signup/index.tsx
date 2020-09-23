import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import Input from '../../shared/components/input';
import Button from '../../shared/components/button';

import { Container, Content, Background, AnimationContainer } from './styles';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
    <Background/>
    <Content>
    <AnimationContainer>
      <img src={logoImg} alt="GoBarber"/>

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome"/>
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>

      </Form> 

        <a href="">
          <FiArrowLeft />
          Voltar para login
        </a>
    </AnimationContainer>
    </Content>

  </Container>
  )
 
}

export default SignUp;