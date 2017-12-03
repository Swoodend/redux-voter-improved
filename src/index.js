import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { votesReducer } from './reducers/votesReducer';
import { currentPercentageReducer } from './reducers/currentPercentageReducer';
import { pastPercentageReducer } from './reducers/pastPercentageReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const combinedReducers = combineReducers({
    "votes": votesReducer,
    "currentPercentages": currentPercentageReducer,
    "pastPercentages": pastPercentageReducer
});

const logger = createLogger();
let store = createStore(combinedReducers, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

