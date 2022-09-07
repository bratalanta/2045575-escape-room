import { useAppSelector } from 'hooks';
import { selectQuests } from 'store/quests-slice/selectors';
import QuestItem from '../quest-item/quest-item';
import * as S from './quests-list.styled';

const QuestsList = () => {
  const quests = useAppSelector(selectQuests);

  return (
    <S.QuestsList>
      {quests.map((quest) => (
        <QuestItem key={quest.id} quest={quest}/>
      ))}
    </S.QuestsList>
  )
}

export default QuestsList;
