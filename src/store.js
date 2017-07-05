import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, logger))
);
