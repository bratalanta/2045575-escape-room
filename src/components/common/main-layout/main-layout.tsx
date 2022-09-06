import { Header, Footer } from 'components/common/common';
import { ReactNode } from 'react';
import React from 'react';

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
