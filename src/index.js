import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalState, StateProvider } from "./globalState";
import { reducer, initState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initState={initState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
