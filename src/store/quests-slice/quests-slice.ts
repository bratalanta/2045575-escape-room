import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const';
import { fetchQuestsAction } from 'store/api-actions';
import { Quest } from 'types/quest';

type InitialState = {
  quests: Quest[];
  questsLoadingStatus: LoadingStatus;
}

const initialState: InitialState = {
  quests: [],
  questsLoadingStatus: LoadingStatus.Idle
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
      });
  }
});
