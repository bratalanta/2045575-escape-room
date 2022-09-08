import { FilterType } from 'const'
import { Filter } from 'types/filter'
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

type QuestIconProps = {
  filterType: Filter
}

const QuestIcon = ({filterType}: QuestIconProps) => {
  switch (filterType) {
    case FilterType.All:
      return <IconAllQuests />
    case FilterType.Adventures:
      return <IconAdventures />
    case FilterType.Horror:
      return <IconHorrors />
    case FilterType.Detective:
      return <IconDetective />
    case FilterType.Mystic:
      return <IconMystic />
    case FilterType.Scifi:
      return <IconScifi />
  }
};

export default QuestIcon;
