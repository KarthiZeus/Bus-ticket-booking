import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './Components/app/App';
import { Provider } from 'react-redux';
import  allReducers from './Reducers/index';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(
    allReducers,
    // (applyMiddleware(sagaMiddleware)),
  );
//   sagaMiddleware.run(rootWatchers);
  return store;
}

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

