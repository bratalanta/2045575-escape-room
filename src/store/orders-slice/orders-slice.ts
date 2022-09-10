import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const';
import { postOrderAction } from 'store/api-actions';

type InitialState = {
  orderLoadingStatus: LoadingStatus;
}

const initialState: InitialState = {
  orderLoadingStatus: LoadingStatus.Idle
}

export const ordersSlice = createSlice({
  name: NameSpace.Orders,
  initialState,
  reducers: {
    resetOrderLoadingStatus: (state) => {
      state.orderLoadingStatus = LoadingStatus.Idle
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrderAction.pending, (state) => {
        state.orderLoadingStatus = LoadingStatus.Pending
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.orderLoadingStatus = LoadingStatus.Rejected
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.orderLoadingStatus = LoadingStatus.Fulfilled
      });
  }
});

export const {resetOrderLoadingStatus} = ordersSlice.actions;
