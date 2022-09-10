import * as S from './page-heading.styled';
import { ReactNode } from 'react';

type PageHeadingProps = {
  children: ReactNode;
}

const PageHeading = ({ children, ...props }: PageHeadingProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
