import styled from 'styled-components';
import { Link as RouterLink } from 'components/common/common';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.color.nero2};
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  width: 500px;
  height: 400px;
  text-align: center;
`

export const NotFoundCode = styled.p`
  font-size: ${({ theme }) => theme.font.semilarge};
`

export const NotFoundText = styled.h1`
  margin-bottom: 50px;
`
export const Link = styled(RouterLink)`
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: underline;

  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;
