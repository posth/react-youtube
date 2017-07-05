import React from 'react';

const SongPlayer = ({ selectedVideo }) => {

    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    const selectedVideoId = selectedVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${selectedVideoId}`;

    return (
        <div className="fl w-100">
            <iframe className="fl w-80 h5" src={url}></iframe>
        </div>
    );

};

export default SongPlayer;