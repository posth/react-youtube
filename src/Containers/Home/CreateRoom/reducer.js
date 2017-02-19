// import GetPublicRooms from './actions'
import {initialState} from '../../../reducers/mockstate'
import {ATYPES} from './actions'


export function CreateRoom (state = [], action) {
  switch (action.type) {
    case ATYPES.GET_PUBLIC_REQUESTED:
      return state

    case ATYPES.GET_PUBLIC_SUCCESS:
      return state

    case ATYPES.GET_PUBLIC_FAIL:
      return state

    default:
      return state;
  }
}
