import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { votesReducer } from './reducers/votesReducer';
import { currentPercentageReducer } from './reducers/currentPercentageReducer';
import { pastPercentageReducer } from './reducers/pastPercentageReducer';
import { combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';

const combinedReducers = combineReducers({
    "votes": votesReducer,
    "currentPercentages": currentPercentageReducer,
    "pastPercentages": pastPercentageReducer
});

let store = createStore(combinedReducers);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
