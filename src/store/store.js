import { votesReducer } from '../reducers/votesReducer';
import { currentPercentageReducer } from '../reducers/currentPercentageReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const combinedReducers = combineReducers({
    "votes": votesReducer,
    "currentPercentages": currentPercentageReducer
});

const logger = createLogger();
export let store = createStore(combinedReducers, applyMiddleware(logger, thunk));