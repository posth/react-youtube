import database from '../../../reducers/database'

/*
 * action types
 */

export const ATYPES = {
	ACTIVE_ROOM_REQUESTED: 'ACTIVE_ROOM_REQUESTED',
	ACTIVE_ROOM_SUCCESS: 'ACTIVE_ROOM_SUCCESS',
	ACTIVE_ROOM_FAIL: 'ACTIVE_ROOM_FAIL'
}


/*
 * action creators
 */

export function activeRoomRequested() {
  return { type: ATYPES.ACTIVE_ROOM_REQUESTED }
}

export function activeRoomSuccess(payload) {
  return { type: ATYPES.ACTIVE_ROOM_SUCCESS, payload }
}

export function activeRoomfail(error) {
  return { type: ATYPES.ACTIVE_ROOM_FAIL, error }
}

export function getActiveRoom(id) {
console.log('jdkflajskdljfklads', id)
  return function(dispatch) {
    dispatch(activeRoomRequested());

		return database.ref('/public/' + id).on("value", function(snapshot) {
  		console.log(snapshot.val());
			dispatch(activeRoomSuccess(snapshot.val()));
		})
		// .then(function(snapshot) {
		// 	dispatch(activeRoomSuccess(snapshot.val));
   	// }).catch((err) => {
		// 	console.log(err)
		// 	dispatch(activeRoomfail(err));
		// })
	}
}
