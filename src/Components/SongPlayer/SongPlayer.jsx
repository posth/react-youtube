import React from 'react';

const SongPlayer = ({ selectedVideo }) => {

	if (!selectedVideo) {
			return <div>Plaese select a Video to Play</div>
	}

	const selectedVideoId = selectedVideo.id.videoId;
	const url = `https://www.youtube.com/embed/${selectedVideoId}`;

	return (
			<div className="fl w-100">
					<iframe src={url}></iframe>
			</div>
	);
};

export default SongPlayer;
