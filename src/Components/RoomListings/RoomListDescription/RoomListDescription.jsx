import React from 'react';

export default class RoomListDescription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomInformation: props
        }
    }

    render() {

        const roomInformation = this.props;
        //Each room name received is shown
        return(
            <div>{roomInformation['data']}</div>
        )
    }
}