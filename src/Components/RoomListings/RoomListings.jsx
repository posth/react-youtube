import React from 'react';
import {RoomListDescription} from './RoomListDescription/RoomListDescription';

export default class RoomListings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Stocking the props variable received from the parent into the child to pass to it's children
        // const roomList = this.props;

        //Iterating through the playlist Object to list out each room
        return (
            <div className="room-listings-container">
                {Object.keys(this.props.playList).map(function (key, i) {
                    return (
                        <RoomListDescription key={i} data={key} />
                    );
                })}
            </div>
        )
    }
}
