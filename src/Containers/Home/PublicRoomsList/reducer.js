// import GetPublicRooms from './actions'
import {initialState} from '../../../reducers/mockstate'

  // const initialState = ;


export function getPublic (state = initialState, action) {
  switch (action.type) {
    case 'GET_PUBLIC_REQUESTED':
      return state

    case 'GET_PUBLIC_SUCCESS':
		let data = Object.keys(action.payload)
		let newdatas = data.map(function(key) {
					return action.payload[key]
			});
			const newstate = state.publicRooms.concat(newdatas);
			console.log(newstate, 'newstate')
    return newstate;

    case 'GET_PUBLIC_FAIL':
      return state

    default:
      return state;
  }
}
