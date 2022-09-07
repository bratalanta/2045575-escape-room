import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from 'const';
import { Order } from 'types/order';
import { Quest } from 'types/quest';
import { AppDispatch, State } from 'types/state';

const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quests/fetchQuests',
  async (_, {extra: api}) => {
    const {data} = await api.get<Quest[]>(APIRoute.Quests);

    return data;
  }
);

const fetchQuestAction = createAsyncThunk<Quest, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quests/fetchQuest',
  async (id, {extra: api}) => {
    const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);

    return data;
  }
)

const postOrderAction = createAsyncThunk<undefined, Order, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'orders/postOrder',
  async (order, {extra: api}) => (
    await api.post(APIRoute.Orders, order)
  )
)

export {
  fetchQuestAction,
  fetchQuestsAction,
  postOrderAction
}
