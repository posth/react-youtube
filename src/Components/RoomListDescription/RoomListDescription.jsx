import React from 'react';

export const RoomListDescription = (props) => {


  return (
    <div>
      <h3>{props.room.name}</h3>
      <p>{props.room.desc}</p>
    </div>
  )
}
