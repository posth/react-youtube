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

export function addSong(songInfo) {
		addSongRequested();
    console.log(songInfo, 'songinfo');
		return function(dispatch) {
				//  genrerated key from firebase to use as our ref instead of using the name
				return database.ref('/public/' + songInfo.id + '/songs/' ).push({
					url: songInfo.link
				}).then(function(snapshot) {
						dispatch(addSongSuccess(snapshot.val()));
						// dispatch(getPublic()); should be a get songs function from the list?
				}).catch((err) => {
					console.log(err)
					dispatch(addSongFail(err));
				})
		}
}
