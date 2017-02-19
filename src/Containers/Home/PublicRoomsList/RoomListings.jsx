import React from 'react';
import { connect } from 'react-redux';
import { getPublic } from './actions';
import {RoomListDescription} from '../../../Components/RoomListDescription/RoomListDescription';

export class RoomListings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.getPublic();
    }

		renderList = () => {
			console.log(this.props)
			this.props.publicRooms.map(function (room, i) {
				return (<RoomListDescription key={i} room={room} />);
			})
		}

    render() {
        //Stocking the props variable received from the parent into the child to pass to it's children
        // const publicRooms = this.props;
        //Iterating through the playlist Object to list out each room
        return (
            <div className="room-listings-container pa2 fl w-50 tc">
                {this.props.publicRooms ? renderlist : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	console.log(state, 'container state')
  return {
    publicRooms: state.publicRooms
  }
}

const mapDispatchToProps = (dispatch) => {
	console.log(dispatch, 'hi')
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
