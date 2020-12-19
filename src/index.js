import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import store from "./components/redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = (_appState) => {
  ReactDOM.render(
    // <BrowserRouter>
      <App appState={_appState} dispatch={store.dispatch.bind(store)} store={store}/>,
    // </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState())
store.subscribe(() => {
  let appState = store.getState()
  renderEntireTree(appState)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
