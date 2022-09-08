import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const';
import { fetchQuestAction, fetchQuestsAction } from 'store/api-actions';
import { Quest } from 'types/quest';

type InitialState = {
  quests: Quest[];
  questsLoadingStatus: LoadingStatus;
  quest: Quest;
  questLoadingStatus: LoadingStatus;
}

const initialState: InitialState = {
  quests: [],
  questsLoadingStatus: LoadingStatus.Idle,
  quest: {} as Quest,
  questLoadingStatus: LoadingStatus.Idle
}

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.questsLoadingStatus = LoadingStatus.Pending
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload
        state.questsLoadingStatus = LoadingStatus.Fulfilled
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.questsLoadingStatus = LoadingStatus.Rejected
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.questLoadingStatus = LoadingStatus.Pending
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload
        state.questLoadingStatus = LoadingStatus.Fulfilled
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.questLoadingStatus = LoadingStatus.Rejected
      });
  }
});
