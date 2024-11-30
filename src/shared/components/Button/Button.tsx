import React from 'react';
import * as sc from './styles';

interface IButton{
  Onclick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string; 
}

const Button = ({ Onclick, children, ...rest }: IButton) => {
  return (
    <sc.Button {...rest} onClick={Onclick}>
        {children}
    </sc.Button>
  )
}

export default Button;