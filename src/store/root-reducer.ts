import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appSlice } from './app-slice/app-slice';
import { ordersSlice } from './orders-slice/orders-slice';
import { questsSlice } from './quests-slice/quests-slice';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Orders]: ordersSlice.reducer,
  [NameSpace.App]: appSlice.reducer
});
