import database from '../../../reducers/database'

/*
 * action types
 */

export const ADDSONG_TYPES = {
    ADD_SONG_REQUESTED: 'ADD_SONG_REQUESTED',
    ADD_SONG_SUCCESS: 'ADD_SONG_SUCCESS',
    ADD_SONG_FAIL: 'ADD_SONG_FAIL'
}

/*
 * action creators
 */

export function addSongRequested() {
    return { type: ADDSONG_TYPES.ADD_SONG_REQUESTED }
}

export function addSongSuccess(songInfo) {
    return { type: ADDSONG_TYPES.ADD_SONG_SUCCESS, songInfo }
}

export function addSongFail(error) {
    return { type: ADDSONG_TYPES.ADD_SONG_FAIL, error }
}

export function addSong(songInfo) {
    console.log(songInfo);
}