import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getActiveRoom } from './roomAction.js'

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
		this.props.getActiveRoom(this.props.match.params.roomid);
	}

	render() {
		return (
			<div className="pa3 flex ">
				<section className="fl w-two-thirds">
					<h1>Room Name: {this.props.activeRoom.name}</h1>
					<h2 className="black" >Room Description: {this.props.activeRoom.desc}</h2>
					<SongPlayer className="fl w-30 w-100-m pa2" selectedVideo={this.state.selectedVideo} />
					<h2>Room Playlist</h2>
					<Playlist
						videos={this.props.activeRoom.songs}
						onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					/>
				</section>
				<div className="fl w-third">
					<PlaylistForm roomId={this.props.match.params.roomid} className="pa2" />
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

