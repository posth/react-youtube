import React from 'react';

//Child Containers
import { SongPlayer } from './SongPlayer/SongPlayer';
import { Playlist } from './Playlist/Playlist';
import { PlaylistForm } from './PlaylistForm/PlaylistForm';

export const Room = () => {
    return (
        <div className="pa3">
            <SongPlayer />
            <Playlist />
            <PlaylistForm />
        </div>
    )
}

