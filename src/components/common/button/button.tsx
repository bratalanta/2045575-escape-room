import * as S from './button.styled';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
