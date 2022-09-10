import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { QuestLevel, QuestType } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchQuestAction } from 'store/api-actions';
import { useParams } from 'react-router-dom';
import { questLoadingStatusSelector, selectQuest } from 'store/quests-slice/selectors';
import MainLoader from 'components/main-loader/main-loader';
import ErrorMessage from 'components/error-message/error-message';

const DetailedQuest = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    dispatch(fetchQuestAction(Number(id)));
  }, [id]);

  const {isQuestLoadingStatusPending, isQuestLoadingStatusRejected} = useAppSelector(questLoadingStatusSelector);
  const quest = useAppSelector(selectQuest);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  if (isQuestLoadingStatusPending) {
    return (
      <MainLoader />
    )
  }

  if (isQuestLoadingStatusRejected) {
    return (
      <ErrorMessage />
    )
  }

  const {
    coverImg,
    title,
    type,
    duration,
    peopleCount,
    level,
    description
  } = quest;
  const [minPeopleCount, maxPeopleCount] = peopleCount;

  const onModalCloseBtnClick = () => setIsBookingModalOpened(false);

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{QuestType[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {`${minPeopleCount}-${maxPeopleCount} чел`}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{QuestLevel[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={() => setIsBookingModalOpened(true)}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {
        isBookingModalOpened &&
        <BookingModal
          onModalCloseBtnClick={onModalCloseBtnClick}
          peopleCount={peopleCount}
        />
        }
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
