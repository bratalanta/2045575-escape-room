import * as S from './container.styled';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
