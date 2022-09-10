import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import ErrorMessage from 'components/error-message/error-message';
import MainLoader from 'components/main-loader/main-loader';
import { useAppSelector } from 'hooks';
import { questsLoadingStatusSelector } from 'store/quests-slice/selectors';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const Home = () => {
  const {isQuestsLoadingStatusRejected, isQuestsLoadingStatusPending} = useAppSelector(questsLoadingStatusSelector);

  if (isQuestsLoadingStatusPending) {
    return <MainLoader />
  }

  if (isQuestsLoadingStatusRejected) {
    return <ErrorMessage />
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
};

export default Home;
