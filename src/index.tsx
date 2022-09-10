import { StrictMode } from 'react';
import App from 'components/app/app';
import React from 'react'
import { Provider } from 'react-redux';
import { store } from 'store';
import { fetchQuestsAction } from 'store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';

store.dispatch(fetchQuestsAction())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <ToastContainer />
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>
);
