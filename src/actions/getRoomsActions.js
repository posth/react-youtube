// import firebase from 'firebase';
import database from './database'

/*
 * action types
 */

export const GET_PUBLIC_REQUESTED = 'GET_PUBLIC_REQUESTED'
export const GET_PUBLIC_SUCCESS = 'GET_PUBLIC_SUCCESS'
export const GET_PUBLIC_FAIL = 'GET_PUBLIC_FAIL'


/*
 * action creators
 */



export function getPublic() {
  return function(dispatch) {
    dispatch(getPublicRequested());
    console.log('hihihi')
    return database.ref('/public').once('value').then(function(snapshot) {
      console.log(snapshot.val())
      // var username = snapshot.val().username;
      // ...
    });
  }

}
export function getPublicRequested() {
  return { type: GET_PUBLIC_REQUESTED }
}

export function getPublicSuccess(payload) {
  return { type: GET_PUBLIC_SUCCESS, payload }
}

export function getPublicfail(error) {
  return { type: GET_PUBLIC_FAIL, error }
}
