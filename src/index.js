import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";

import reducers from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// Default URL for Public API
//axios.defaults.baseURL = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
