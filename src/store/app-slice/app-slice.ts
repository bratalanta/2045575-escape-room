import { createSlice } from '@reduxjs/toolkit';
import { FilterType, NameSpace } from 'const';
import { Filter } from 'types/filter';
import { HeaderLink } from 'types/header-link';

type InitialState = {
  currentFilter: Filter;
  activeHeaderLink: HeaderLink;
}

const initialState: InitialState = {
  currentFilter: FilterType.All,
  activeHeaderLink: HeaderLink.Quests
}

export const appSlice = createSlice({
  name: NameSpace.Orders,
  initialState,
  reducers: {
    changeCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    changeActiveLink: (state, action) => {
      state.activeHeaderLink = action.payload;
    },
  },
});

export const {changeCurrentFilter, changeActiveLink} = appSlice.actions;
