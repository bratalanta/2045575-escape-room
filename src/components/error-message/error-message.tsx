import * as S from './error-message.styled';

const ErrorMessage = () => (
  <S.Main>
    <S.Content>
      <S.ErrorText>Не удалось загрузиться :(</S.ErrorText>
      <S.ReloadButton
        onClick={() => window.location.reload()}
      >
        Попробовать еще раз
      </S.ReloadButton>
    </S.Content>
  </S.Main>
)

export default ErrorMessage;
