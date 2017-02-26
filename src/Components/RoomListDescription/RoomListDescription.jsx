import React from 'react';
import { Link } from 'react-router-dom'

export const RoomListDescription = (props) => {

  return (
    <Link to={`${props.room.id}` } className="room-list_container fl w-30 link near-black no-underline grow bg-white overflow-hidden avenir pa2">
      <h3>{props.room.name}</h3>
      <p>{props.room.desc}</p>
    </Link>
  )
}
