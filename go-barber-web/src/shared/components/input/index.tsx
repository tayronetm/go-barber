import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { useField }  from '@unform/core';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);

  return (
    <Container>
      { Icon && <Icon size={20} />}
      <input {...rest}/>
    </Container>
  )
}

export default Input;