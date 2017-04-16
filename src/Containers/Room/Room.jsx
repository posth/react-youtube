import React from 'react';

// Child Containers note: when using connect need to be called without brackets so it imports default
import { SongPlayer } from './SongPlayer/SongPlayer';
import Playlist from './Playlist/Playlist';
import PlaylistForm from './PlaylistForm/PlaylistForm';

// not sure whether to do get here or playlist
export const Room = ({ match }) => {
	return (
		<div className="pa3 flex ">
			<div className="fl w-30 w-100-m pa2">
				<SongPlayer />
			</div>
			<div className="fl w-70 w-100-m pa2">
				<Playlist roomName={match.params.roomid} />
				<PlaylistForm className="pa2" roomName={match.params.roomid} />
			</div>

		</div>
	)
}

