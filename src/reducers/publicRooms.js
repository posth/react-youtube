import GetPublicRooms from '../actions/getRoomsActions'

export function getPublic (state = {}, action) {
  switch (action.type) {
    case 'GET_PUBLIC':
      return state

    case 'GET_PUBLIC_SUCCESS':
      return state

    case 'GET_PUBLIC_FAIL':
      return state

    default:
      return state;
  }
}
