import { ThemeProvider } from 'styled-components';
import {
  Route,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';
import NotFound from 'components/not-found/not-found';
import { useAppDispatch } from 'hooks';
import { Routes } from 'react-router-dom';
import { changeActiveLink } from 'store/app-slice/app-slice';
import HistoryRouter from 'components/common/history-router/history-router';
import browserHistory from 'browser-history';

const App = () => {
  const dispatch = useAppDispatch();
  const location = window.location.pathname;
  dispatch(changeActiveLink(location));

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
          path={AppRoute.Quest}
          element={<DetailedQuest />}
          />
          <Route
          path={AppRoute.Contacts}
          element={<Contacts />}
          />
          <Route
          path={AppRoute.Home}
          element={<Home />}
          />
          <Route
          path={AppRoute.NotFound}
          element={<NotFound />}
          />
        </Routes>
      </HistoryRouter>
    </ThemeProvider>
  );
};

export default App;
