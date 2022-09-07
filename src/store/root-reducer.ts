import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questsSlice } from './quests-slice/quests-slice';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsSlice.reducer
});
