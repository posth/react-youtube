import database from '../../../Config/database'

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

export const REMOVESONG_TYPES = {
	REMOVE_SONG_REQUESTED: 'REMOVE_SONG_REQUESTED',
	REMOVE_SONG_SUCCESS: 'REMOVE_SONG_SUCCESS',
	REMOVE_SONG_FAIL: 'REMOVE_SONG_FAIL'
}

export function removeSongRequested() {
	return { type: REMOVESONG_TYPES.REMOVE_SONG_REQUESTED }
}

export function removeSongSuccess(updatedSongList) {
	return { type: REMOVESONG_TYPES.REMOVE_SONG_SUCCESS, updatedSongList }
}

export function removeSongFail(error) {
	return { type: REMOVESONG_TYPES.REMOVE_SONG_FAIL, error }
}

// for details see: https://github.com/posth/react-youtube/issues/7
// Should refresh the songs array from server
// take array of songs and add songs to it (in reducer)

export function addSong(currentSongInfo) {
	const queryPoint = database.ref('/public/' + currentSongInfo.roomId).child('songs');
	addSongRequested();
	return function (dispatch) {
		// this first point could be a utility funciton?
		return queryPoint.once("value").then(function (s) {
			let latestSongs = s.val() ? s.val() : [];
			latestSongs.push(
				currentSongInfo.selectedVideo
			);
			return queryPoint.set(latestSongs).then(function () {
				dispatch(addSongSuccess(latestSongs));
			});
		});
	}
}

export function removeSong(currentSongInfo) {
	const queryPoint = database.ref('/public/' + currentSongInfo.roomId).child('songs');
	removeSongRequested();
	return function (dispatch) {
		return queryPoint.once('value').then(function (s) {
			let latestSongs = s.val() ? s.val() : [];
			//small bug where the first element in the array is undefined x 1 (splicing for now as a quick fix)
			//this bug is also present in the addSong
			latestSongs.splice(0, 1);
			let findCurrentSong = (songObject) => {
				return songObject.id.videoId === currentSongInfo.selectedVideo.id.videoId;
			}
			let indexOfSongToRemove = latestSongs.findIndex(findCurrentSong);
			latestSongs.splice(indexOfSongToRemove, 1);
			return queryPoint.set(latestSongs).then(function () {
				dispatch(removeSongSuccess(latestSongs));
			});
		})
	}
}
