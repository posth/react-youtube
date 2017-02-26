import database from '../../../reducers/database'
import { getPublic } from '../PublicRoomsList/actions'

/*
 * action types
 */

export const ATYPES = {
	CREATE_ROOM_REQUESTED: 'CREATE_ROOM_REQUESTED',
	CREATE_ROOM_SUCCESS: 'CREATE_ROOM_SUCCESS',
	CREATE_ROOM_FAIL: 'CREATE_ROOM_FAIL'
}


/*
 * action creators
 */

export function createRoomRequested() {
  return { type: ATYPES.CREATE_ROOM_REQUESTED }
}

export function createRoomSuccess(payload) {
  return { type: ATYPES.CREATE_ROOM_SUCCESS, payload }
}

export function createRoomfail(error) {
  return { type: ATYPES.CREATE_ROOM_FAIL, error }
}

export function createRoom(payload) {
  return function(dispatch) {
    dispatch(createRoomRequested());
		// const key = database.ref('/public/').push().key;
		// console.log(key);
    return database.ref('/public/').push({
			name: payload.name,
			desc: payload.desc,
			}).then(function(snapshot) {
			dispatch(createRoomSuccess(snapshot.val));
			dispatch(getPublic());
   	  }).catch((err) => {
			console.log(err)
			dispatch(createRoomfail(err));
		})
	}
}
