import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CashProvider from './hooks/cash';
import EntradasProvider from './hooks/entradas';
import SaidasProvider from './hooks/saidasall';
import TransacrionsProvider from './hooks/transactions';
import ContentProvider from './hooks/contentid';
import PersonalInfoProvider from './hooks/personaldata';
import TransacrionsoutProvider from './hooks/transactionsout';
import "./css/botoes.css"

ReactDOM.render(
  <React.StrictMode>
    <PersonalInfoProvider>
      <ContentProvider>
        <TransacrionsProvider>
          <TransacrionsoutProvider>
            <CashProvider>
              <EntradasProvider>
                <SaidasProvider>
                  <App />
                </SaidasProvider>
              </EntradasProvider>
            </CashProvider>
          </TransacrionsoutProvider>
        </TransacrionsProvider>
      </ContentProvider>
    </PersonalInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
