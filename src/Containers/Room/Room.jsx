import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getActiveRoom } from './Playlist/playlistAction.js'

// Child Containers note: when using connect need to be called without brackets so it imports default
import SongPlayer from '../../Components/SongPlayer/SongPlayer'
import Playlist from './Playlist/Playlist'
import PlaylistForm from './PlaylistForm/PlaylistForm'

// not sure whether to do get here or playlist
class Room extends Component {

	constructor(props) {
		super(props);

		//TODO - need to grab this data from db
		this.state = {
			videos: [],
			selectedVideo: null
		};
	}

	componentWillMount() {
		this.props.getActiveRoom(this.props.roomName);
	}

	render() {
		return (
			<div className="pa3 flex ">
				<h1>Room Name: {this.props.match.params.roomid} </h1>
				{/*<h2 className="black" >Room Description: {this.state.activeRoom.desc}</h2>*/}
				<div className="fl w-30 w-100-m pa2">
					<SongPlayer selectedVideo={this.state.selectedVideo} />
				</div>
				<div className="fl w-70 w-100-m pa2">
					<Playlist
						videos={this.state.videos}
						roomName={this.props.match.params.roomid}
					/>
					<PlaylistForm className="pa2"/>
				</div>
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
)(Room)

