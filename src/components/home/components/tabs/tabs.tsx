import { FilterType } from 'const';
import TabItem from '../tab-item/tab-item';
import * as S from './tabs.styled';


const Tabs = () => {
  return (
    <S.Tabs>
      {Object.values(FilterType).map((filterType) => (
        <TabItem key={filterType} filterType={filterType}/>
      ))}
    </S.Tabs>
  )
}

export default Tabs;
