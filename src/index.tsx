import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import store from './store/store';
import { persistor } from './store/store';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}
`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


