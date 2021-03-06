import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../shared/components/input';
import Button from '../../shared/components/button';

import { Container, Content, Background, AnimationContainer } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),

        email: Yup.string().required('E-mail ogrigatório')
        .email('Digite um email válido'),

        password: Yup.string()
        .min(6, 'No mínimo 6 dígitos')
      })

      await schema.validate(data, {
        abortEarly: false //Retornar todos os erros de uma vez só
      });

    } catch (error) {
      console.log(error)
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
    }
  }, [])

  return (
    <Container>
    <Background/>
    <Content>
    <AnimationContainer>
      <img src={logoImg} alt="GoBarber"/>

      <Form ref={formRef} onSubmit={handleSubmit}>
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