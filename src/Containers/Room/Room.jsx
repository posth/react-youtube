import React from 'react';

//Child Containers note: when using connect need to be called without brackets so it imports default
import { SongPlayer } from './SongPlayer/SongPlayer';
import Playlist from './Playlist/Playlist';
import { PlaylistForm } from './PlaylistForm/PlaylistForm';

// not sure whether to do get here or playlist
export const Room = ({ match }) => {
		return (
			<div className="pa3 flex ">
				<div className="w-33 pa2">
					<Playlist roomName={match.params.roomid} />
					<PlaylistForm />
				</div>
				<div className="w-66 pa2">
					<SongPlayer />
				</div>
			</div>
		)
}

