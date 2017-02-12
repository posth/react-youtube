import { combineReducers } from 'redux';
import { getPublic } from './publicRooms';

// takes a series of reducers and combines them, passing them to the store
export default combineReducers({getPublic});
