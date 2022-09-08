import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import React from 'react'
import { Provider } from 'react-redux';
import { store } from 'store';
import { fetchQuestsAction } from 'store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchQuestsAction())

render(
  // <StrictMode>
  <>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  // </StrictMode>,
  document.getElementById('root'),
);
