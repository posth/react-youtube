import React from 'react';
import { Link } from 'react-router-dom'

export const RoomListDescription = (props) => {

  return (
    <Link to={`${props.room.name}` }>
      <h3>{props.room.name}</h3>
      <p>{props.room.desc}</p>
    </Link>
  )
}
