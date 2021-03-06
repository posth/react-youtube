import React from 'react';
import { connect } from 'react-redux';
import { getPublic } from './actions';
import { RoomListDescription } from '../../../Components/RoomListDescription/RoomListDescription';

export class RoomListings extends React.Component {
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
            <div className="room-listings-container pa2 fl w-70 w-100-m tl">
                {this.props.publicRooms.map(function (room, i) {
									return (<RoomListDescription key={i} room={room} />);
								})}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    publicRooms: state.publicRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPublic: () => {
      dispatch(getPublic())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListings)
