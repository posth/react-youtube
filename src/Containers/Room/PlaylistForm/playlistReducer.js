import { ADDSONG_TYPES } from './playlistAction';

export function addSong(state = [], action) {
    switch (action.type) {
        case ADDSONG_TYPES.ADD_SONG_REQUESTED:
            return state
        case ADDSONG_TYPES.ADD_SONG_SUCCESS:
            return state.activeRoom.songs = action.payload
        case ADDSONG_TYPES.ADD_SONG_FAIL:
            return state
        default:
            return state;
    }
}
