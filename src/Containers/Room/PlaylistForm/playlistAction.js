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

// for details see: https://github.com/posth/react-youtube/issues/7
// Should refresh the songs array from server
// take array of songs and add songs to it (in reducer)

export function addSong(songInfo) {
		const queryPoint = database.ref('/public/' + songInfo.id).child('songs');
		addSongRequested();
		return function(dispatch) {
			// this first point could be a utility funciton?
			return queryPoint.once("value").then(function(s) {
				let latestSongs = s.val() ? s.val() : [];
				latestSongs.push({
					url: songInfo.link
				});
				return queryPoint.set(latestSongs).then(function() {
					dispatch(addSongSuccess(latestSongs));
				});
		});
	 }
}
