import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { APIRoute } from 'const';
import { Order } from 'types/order';
import { Quest } from 'types/quest';
import { AppDispatch, State } from 'types/state';
import { toast } from 'react-toastify';

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

const postOrderAction = createAsyncThunk<void, Order, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'orders/postOrder',
  async (order, {extra: api}) => {
    console.log(order)
    try {
      await api.post(APIRoute.Orders, order)
    } catch(err) {
      if (axios.isAxiosError(err) && err.response) {
        // toast.warn(err.);
      }

      throw err;
    }

  }
)

export {
  fetchQuestAction,
  fetchQuestsAction,
  postOrderAction
}
