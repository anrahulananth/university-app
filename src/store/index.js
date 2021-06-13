import { universitiesReducer } from '../reducers';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
const reducers = {
    universities: universitiesReducer,
};
const appState = combineReducers(reducers);
export const store = createStore(appState, applyMiddleware(logger));