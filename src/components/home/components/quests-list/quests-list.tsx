import { useAppSelector } from 'hooks';
import { filteredQuestsSelector } from 'store/quests-slice/selectors';
import QuestItem from '../quest-item/quest-item';
import * as S from './quests-list.styled';

const QuestsList = () => {
  const filteredQuests = useAppSelector(filteredQuestsSelector);

  return (
    <S.QuestsList>
      {filteredQuests.map((quest) => (
        <QuestItem key={quest.id} quest={quest}/>
      ))}
    </S.QuestsList>
  )
}

export default QuestsList;
