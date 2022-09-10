import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from 'const';
import { Order } from 'types/order';
import { Quest } from 'types/quest';
import { AppDispatch, State } from 'types/state';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import browserHistory from 'browser-history';

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
    try {
      const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);

      return data;
    } catch(err) {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === StatusCodes.NOT_FOUND) {
          browserHistory.push({
            pathname: `/${AppRoute.NotFound}`
          })
        }
      }

      throw err;
    }
  }
)

const postOrderAction = createAsyncThunk<void, Order, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'orders/postOrder',
  async (order, {extra: api}) => {
    try {
      await api.post(APIRoute.Orders, order)

      toast.success('Данные отправлены!')
    } catch(err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.warn('Не удалось отправить данные. Попробуйте позже');
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
