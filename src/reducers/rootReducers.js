import { combineReducers } from 'redux';
import { getPublic } from '../Containers/Home/PublicRoomsList/reducer.js';

// takes a series of reducers and combines them, passing them to the store
export default combineReducers({getPublic});
