import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Form } from '@unform/web';

import Input from '../../shared/components/input';
import * as Yup from 'yup'; 
import Button from '../../shared/components/button';

import { AuthContext } from '../../context/AuthContext';
import { Container, Content, Background, AnimationContainer } from './styles';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email('Digite email válido').required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      })

      await schema.validate(data, {
        abortEarly: false //Retornar todos os erros de uma vez só
      });

      signIn({
        email: data.email,
        password: data.password
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, [signIn])
  
  return (
    <Container>
      <Content>
      <AnimationContainer>
        <img src={logoImg} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
          <Input name="password" icon={FiLock} type="text" placeholder="Senha"/>

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form> 

          <a href="">
            <FiLogIn />
            Criar conta
          </a>
      </AnimationContainer>
      </Content>

      <Background/>
    </Container>
  )
}

export default SignIn;