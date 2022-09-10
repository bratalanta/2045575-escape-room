import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const';
import { State } from 'types/state';

const selectOrderLoadingStatus = (state: State) => state[NameSpace.Orders].orderLoadingStatus;

const orderLoadingStatusSelector = createSelector(
  [
    selectOrderLoadingStatus,
  ],
  (status) => (
    {
      isOrderStatusPending: status === LoadingStatus.Pending,
      isOrderStatusFulfilled: status === LoadingStatus.Fulfilled
    }
  ));

export {
  orderLoadingStatusSelector
}
