import * as S from './page-title.styled';
import React, { ReactNode } from 'react';

type PageTitleProps = {
  children: ReactNode;
}

const PageTitle = ({ children, ...props }: PageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
