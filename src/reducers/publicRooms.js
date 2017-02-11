import GetPublicRooms from '../actions/getRoomsActions'

export function getPublic (state = {}, action) {
  console.log('get')
  switch (action.type) {
    case 'GET_PUBLIC':
      console.log('get')
      return state

    case 'GET_PUBLIC_SUCCESS':
    console.log('good')
      return state

    case 'GET_PUBLIC_FAIL':
    console.log('bad')
      return state

    default:
      return state;
  }
}
