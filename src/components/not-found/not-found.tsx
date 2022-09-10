import * as S from './not-found.styled';
import { AppRoute } from 'const';

const NotFound = () => (
    <S.Main>
      <S.ContentWrapper>
        <S.NotFoundCode>
          404
        </S.NotFoundCode>
        <S.NotFoundText>
          Упс, что-то пошло не так
        </S.NotFoundText>
        <S.Link to={AppRoute.Home}>
          Вернуться на главную
        </S.Link>
      </S.ContentWrapper>
    </S.Main>
);

export default NotFound;
