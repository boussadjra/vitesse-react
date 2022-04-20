import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from "react-i18next";

import 'uno.css'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import store from './stores'
import { Provider } from 'react-redux';
import i18n from './i18n';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
)
