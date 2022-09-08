import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const';
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
      isQuestsStatusPending: [LoadingStatus.Pending, LoadingStatus.Idle].includes(status),
      isQuestsStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

const questLoadingStatusSelector = createSelector(
  [
    selectQuestLoadingStatus,
  ],
  (status) => (
    {
      isQuestStatusPending: [LoadingStatus.Pending, LoadingStatus.Idle].includes(status),
      isQuestStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

export {
  selectQuests,
  questsLoadingStatusSelector,
  questLoadingStatusSelector,
  selectQuest
}
