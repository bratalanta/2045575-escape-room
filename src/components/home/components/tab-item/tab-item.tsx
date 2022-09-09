import * as S from './tab-item.styled';
import { Filter } from 'types/filter';
import QuestIcon from '../quest-icon/quest-icon';
import { useAppDispatch, useAppSelector } from 'hooks';
import { changeCurrentFilter } from 'store/app-slice/app-slice';
import { selectCurrentFilter } from 'store/app-slice/selectors';

type TabItemProps = {
  filterType: Filter
}

const TabItem = ({filterType}: TabItemProps) => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectCurrentFilter);

  return (
    <S.TabItem>
      <S.TabBtn
        isActive={filterType === currentFilter}
        onClick={() => dispatch(changeCurrentFilter(filterType))}
      >
        <QuestIcon filterType={filterType} />
        <S.TabTitle>{filterType}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  )
}

export default TabItem;
