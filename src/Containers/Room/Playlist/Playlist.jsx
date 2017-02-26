import React from 'react';
import { connect } from 'react-redux';
import { getActiveRoom } from './playlistAction.js'

export class Playlist extends React.Component{


	componentWillMount() {
		this.props.getActiveRoom(this.props.roomName);
	}

    render() {
        return (
            <div>
                <h1>{this.props.activeRoom.name}</h1>
								<p className="white" >{this.props.activeRoom.desc}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    activeRoom: state.activeRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActiveRoom: (id) => {
      dispatch(getActiveRoom(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)
