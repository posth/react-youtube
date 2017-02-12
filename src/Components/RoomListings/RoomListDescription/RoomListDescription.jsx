import React from 'react';

export const RoomListDescription = (props) => {
  const songsnumber = props.room.songs.length

  return (
    <div>
      <h3>{props.room.playListName} - {songsnumber}</h3>
      <p>{props.room.description}</p>
    </div>
  )
}
