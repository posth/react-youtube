import React from 'react';

import CreateRoom from './CreateRoom/CreateRoom';
import RoomListings from './PublicRoomsList/RoomListings';

export const Home = () => {
    console.log('home running!');
    return (
        <div className="pa3">
            <RoomListings />
            <CreateRoom />
        </div>
    )
}

