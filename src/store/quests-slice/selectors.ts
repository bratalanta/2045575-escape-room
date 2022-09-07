import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const';
import { State } from 'types/state';

const selectQuests = (state: State) => state[NameSpace.Quests].quests;
const selectQuestsLoadingStatus = (state: State) => state[NameSpace.Quests].questsLoadingStatus;

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

export {
  selectQuests,
  questsLoadingStatusSelector
}
