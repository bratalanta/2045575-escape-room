import logo from 'assets/img/logo.svg';
import { AppRoute } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { changeActiveLink } from 'store/app-slice/app-slice';
import { selectActiveHeaderLink } from 'store/app-slice/selectors';
import { HeaderLink } from 'types/header-link';
import * as S from './header.styled';

const Header = () => {
  const dispatch = useAppDispatch();
  const activeHeaderLink = useAppSelector(selectActiveHeaderLink);

  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link
              $isActive={activeHeaderLink === HeaderLink.Quests}
              to={AppRoute.Home}
              onClick={() => dispatch(changeActiveLink(HeaderLink.Quests))}
            >
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link
              $isActive={activeHeaderLink === HeaderLink.Contacts}
              to={AppRoute.Contacts}
              onClick={() => dispatch(changeActiveLink(HeaderLink.Contacts))}
            >
              Контакты
            </S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
  );
};

export default Header;
