import { AppRoute, QuestLevel } from 'const';
import * as S from './quest-item.styled';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { Quest } from 'types/quest';
import { generatePath } from 'react-router-dom';

type QuestItemProps = {
  quest: Quest;
}

const QuestItem = ({quest}: QuestItemProps) => {
  const {
    title,
    previewImg,
    level,
    peopleCount,
    id
  } = quest;
  const [minPeopleCount, maxPeopleCount] = peopleCount;

  return (
    <S.QuestItem>
    <S.QuestItemLink to={generatePath(AppRoute.Quest, {id})}>
      <S.Quest>
        <S.QuestImage
          src={previewImg}
          width="344"
          height="232"
          alt={`квест ${title}`}
        />

        <S.QuestContent>
          <S.QuestTitle>{title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {`${minPeopleCount}-${maxPeopleCount} чел`}
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {QuestLevel[level]}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
  )
}

export default QuestItem;
