import { createSelector } from '@reduxjs/toolkit';
import { FilterType, LoadingStatus, NameSpace, QuestType } from 'const';
import { selectCurrentFilter } from 'store/app-slice/selectors';
import { State } from 'types/state';

const selectQuests = (state: State) => state[NameSpace.Quests].quests;
const selectQuestsLoadingStatus = (state: State) => state[NameSpace.Quests].questsLoadingStatus;

const selectQuest = (state: State) => state[NameSpace.Quests].quest;
const selectQuestLoadingStatus = (state: State) => state[NameSpace.Quests].questLoadingStatus;

const questsLoadingStatusSelector = createSelector(
  [
    selectQuestsLoadingStatus,
  ],
  (status) => (
    {
      isQuestsLoadingStatusPending: [LoadingStatus.Pending, LoadingStatus.Idle].includes(status),
      isQuestsLoadingStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

const questLoadingStatusSelector = createSelector(
  [
    selectQuestLoadingStatus,
  ],
  (status) => (
    {
      isQuestLoadingStatusPending: [LoadingStatus.Pending, LoadingStatus.Idle].includes(status),
      isQuestLoadingStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

const filteredQuestsSelector = createSelector(
  [
    selectQuests,
    selectCurrentFilter
  ],
  (quests, currentFilter) => {
    if (currentFilter === FilterType.All) {
      return quests;
    }

    return quests.filter((quest) => QuestType[quest.type] === currentFilter.toLowerCase())
  }
)


export {
  selectQuests,
  questsLoadingStatusSelector,
  questLoadingStatusSelector,
  selectQuest,
  filteredQuestsSelector
}
