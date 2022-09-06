import * as S from './page-subtext.styled';
import React, { ReactNode } from 'react';

type PageSubtextProps = {
  children: ReactNode;
}

const PageSubtext = ({ children, ...props }: PageSubtextProps) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
