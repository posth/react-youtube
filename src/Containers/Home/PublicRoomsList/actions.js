// import firebase from 'firebase';
import database from '../../../reducers/database'

/*
 * action types
 */

export const GET_PUBLIC_REQUESTED = 'GET_PUBLIC_REQUESTED'
export const GET_PUBLIC_SUCCESS = 'GET_PUBLIC_SUCCESS'
export const GET_PUBLIC_FAIL = 'GET_PUBLIC_FAIL'


/*
 * action creators
 */

export function getPublicRequested() {
  return { type: GET_PUBLIC_REQUESTED }
}

export function getPublicSuccess(payload) {
  return { type: GET_PUBLIC_SUCCESS, payload }
}

export function getPublicfail(error) {
  return { type: GET_PUBLIC_FAIL, error }
}

export function getPublic() {
  return function(dispatch) {
    dispatch(getPublicRequested());
    return database.ref('/public').on('value', function(snapshot) {
			dispatch(getPublicSuccess(snapshot.val()));
		})
	}
}
