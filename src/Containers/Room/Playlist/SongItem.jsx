import React from 'react';

// function that maps over the current songs in room and reterns list elements
const SongItem = ({ video, onVideoSelect }) => {

	const imageUrl = video.snippet.thumbnails.default.url;

	const removeItem = (event) => {
		// console.log(event);
		//remove me here
		// need to re-organise DB so this is easier
	};

	return (
		<li className="black" onClick={() => onVideoSelect(video)}>
			<img src={imageUrl} />
			<span className="ma3">{video.snippet.title}</span>
			<button onClick={removeItem}>Delete Song</button>
		</li>
	);
};

export default SongItem;
