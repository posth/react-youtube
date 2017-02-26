// import GetPublicRooms from './actions'
// import {initialState} from '../../../reducers/mockstate'
import {ATYPES} from './playlistAction'


export function getActiveReducer (state = {}, action) {
  switch (action.type) {
    case ATYPES.ACTIVE_ROOM_REQUESTED:
      return state

    case ATYPES.ACTIVE_ROOM_SUCCESS:
		console.log(state)
      return state = action.payload

    case ATYPES.ACTIVE_ROOM_FAIL:
      return state

    default:
      return state;
  }
}
