import database from '../../../reducers/database'

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
	console.log(payload)
  return function(dispatch) {
    dispatch(createRoomRequested());
    return database.ref('/public/' + payload.name).set(payload.desc).then(function(snapshot) {
      console.log(snapshot.val())
			dispatch(createRoomSuccess(snapshot.val()));
      // var username = snapshot.val().username;
      // ...
    }).catch(err => dispatch(createRoomfail(err)));
	}
}
