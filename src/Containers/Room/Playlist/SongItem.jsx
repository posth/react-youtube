import React from 'react';

	// function that maps over the current songs in room and reterns list elements
const SongItem = ({song}) => {

		const removeItem = (event) => {
			console.log(event);
			//remove me here
			// need to re-organise DB so this is easier
		};

		return (
				<li className="white" >
					<span>{song.url}</span>
					<button onClick={removeItem}>X</button>
				</li>
		);
};

export default SongItem;
