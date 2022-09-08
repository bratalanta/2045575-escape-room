import { Button, PageHeading } from 'components/common/common';
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  text-align: center;
`

const ErrorText = styled(PageHeading)`
  color: ${({ theme }) => theme.color.tangerine};
  font-size: 16px;
`

const ReloadButton = styled(Button).attrs({ type: 'button' })`
`

export {
  Main,
  ErrorText,
  ReloadButton,
  Content
}
