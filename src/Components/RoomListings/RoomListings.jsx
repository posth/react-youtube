import React from 'react';
import {RoomListDescription} from './RoomListDescription/RoomListDescription';

export default class RoomListings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.getPublic();
    }

    render() {
        //Stocking the props variable received from the parent into the child to pass to it's children
        // const publicRooms = this.props;
        //Iterating through the playlist Object to list out each room
        return (
            <div className="room-listings-container pa2 fl w-100">
                {this.props.publicRooms.map(function (room, i) {
                    return (
                        <RoomListDescription key={i} room={room} />
                    );
                })}
            </div>
        )
    }
}
