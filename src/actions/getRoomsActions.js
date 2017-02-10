/*
 * action types
 */

export const GET_PUBLIC_REQUESTED = 'GET_PUBLIC_REQUESTED'
export const GET_PUBLIC_SUCCESS = 'GET_PUBLIC_SUCCESS'
export const GET_PUBLIC_FAIL = 'GET_PUBLIC_FAIL'

/*
 * other constants
 */

export const GetPublicRooms = {
  GET_PUBLIC_REQUESTED: 'GET_PUBLIC_REQUESTED',
  GET_PUBLIC_SUCCESS: 'GET_PUBLIC_SUCCESS',
  GET_PUBLIC_FAIL: 'GET_PUBLIC_FAIL'
}

/*
 * action creators
 */

export function getPublic(text) {
  return { type: GET_PUBLIC_REQUESTED }
}

export function getPublicSuccess(payload) {
  return { type: GET_PUBLIC_SUCCESS, payload }
}

export function getPublicfail(error) {
  return { type: GET_PUBLIC_FAIL, error }
}
