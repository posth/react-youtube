import {ATYPES} from './roomAction'

export function getActiveReducer (state = {}, action) {
  switch (action.type) {
    case ATYPES.ACTIVE_ROOM_REQUESTED:
      return state

    case ATYPES.ACTIVE_ROOM_SUCCESS:
      return state = action.payload

    case ATYPES.ACTIVE_ROOM_FAIL:
      return state

    default:
      return state;
  }
}
