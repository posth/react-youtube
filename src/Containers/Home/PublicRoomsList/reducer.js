// import GetPublicRooms from './actions'
import {initialState} from '../../../reducers/mockstate'

  // const initialState = ;


export function getPublicReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_PUBLIC_REQUESTED':
      return state

    case 'GET_PUBLIC_SUCCESS':
    	return state.concat(Object.keys(action.payload).map(function(key) {
					return action.payload[key]
			}));

    case 'GET_PUBLIC_FAIL':
      return state

    default:
      return state;
  }
}
