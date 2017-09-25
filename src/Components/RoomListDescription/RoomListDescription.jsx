import React from 'react';
import { Link } from 'react-router-dom';
import './RoomListDescription.css';

export const RoomListDescription = ({ room }) => (
	<Link to={`${room.id}` } className="room-list_container fl w-100 link near-black no-underline dim overflow-hidden avenir pa2 mb2 ba bg-washed-blue">
		<h3><span className="dark-green">Room name:</span> {room.name}</h3>
		<p><span className="i dark-green">Description:</span> {room.desc}</p>
	</Link>
)
