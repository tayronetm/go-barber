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

  //Executada apenas uma vez utilizar sempre que 
  //for preciso criar uma função dentro do componente
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // if (inputRef.current?.value) {
    //   setHasValue(true);
    // } else {
    //   setHasValue(false);
    // }

    //suggar (Se o input ref tiver valor, true senão false)
    setHasValue(!!inputRef.current?.value)
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(false)
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
    </Container>
  )
}

export default Input;