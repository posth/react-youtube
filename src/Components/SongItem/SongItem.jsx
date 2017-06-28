import React from 'react';

// function that maps over the current songs in room and reterns list elements
const SongItem = ({ video, onVideoSelect }) => {

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="black" onClick={() => onVideoSelect(video)}>
			<img src={imageUrl} />
			<span className="ma3">{video.snippet.title}</span>
		</li>
	);
};

export default SongItem;
