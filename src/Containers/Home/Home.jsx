import React from 'react';

import CreateRoom from './CreateRoom/CreateRoom';
import RoomListings from './PublicRoomsList/RoomListings';

export const Home = () => {
    return (
        <div className="pa3">
            <CreateRoom />
			<RoomListings />
        </div>
    )
}

