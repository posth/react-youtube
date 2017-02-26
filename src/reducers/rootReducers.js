import { combineReducers } from 'redux';
import { getPublicReducer } from '../Containers/Home/PublicRoomsList/reducer.js';
import { getActiveReducer } from '../Containers/Room/Playlist/playlistReducer';

// takes a series of reducers and combines them, passing them to the store
export default combineReducers({
	publicRooms: getPublicReducer,
	activeRoom: getActiveReducer
});
