import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { pocApp } from './reducers';
import { updateTimeAsync } from './actions';

const store = createStore(pocApp, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(updateTimeAsync(1))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
