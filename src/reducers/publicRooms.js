import GetPublicRooms from '../actions/getRoomsActions'
import {initialState} from './mockstate'


export function getPublic (state = initialState, action) {
  switch (action.type) {
    case 'GET_PUBLIC_REQUESTED':
      return state

    case 'GET_PUBLIC_SUCCESS':
      return state

    case 'GET_PUBLIC_FAIL':
      return state

    default:
      return state;
  }
}
