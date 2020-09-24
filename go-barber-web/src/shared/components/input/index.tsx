import React, { InputHTMLAttributes, useEffect, useCallback, useState, useRef } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { useField }  from '@unform/core';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setHasValue(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <Container hasValue={hasValue} isFocused={isFocused}>
      { Icon && <Icon size={20} />}
      <input 
      onFocus={() => setIsFocused(true)}
      onBlur={handleInputBlur}
      defaultValue={defaultValue}
      ref={inputRef} 
      {...rest}/>

      {error}
    </Container>
  )
}

export default Input;