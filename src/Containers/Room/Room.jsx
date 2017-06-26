import React, { Component } from 'react'
import YTSearch from 'youtube-api-search';

// Child Containers note: when using connect need to be called without brackets so it imports default
import SongPlayer from './SongPlayer/SongPlayer'
import Playlist from './Playlist/Playlist'
import PlaylistForm from './PlaylistForm/PlaylistForm'

//Youtube Data Browser API Key
const YT_API_KEY = 'AIzaSyDZ0QhwCDWi7ZHcFLKIUyUA0yZf2AaLMw8';

// not sure whether to do get here or playlist
class Room extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		//Default search for now on room instantiation - because dota2 is life
		this.videoSearch('dota2');
	}

	videoSearch(term) {
		YTSearch({ key: YT_API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div className="pa3 flex ">
				<div className="fl w-30 w-100-m pa2">
					<SongPlayer selectedVideo={this.state.selectedVideo} />
				</div>
				<div className="fl w-70 w-100-m pa2">
					<Playlist roomName={this.props.match.params.roomid} />
					<PlaylistForm className="pa2" roomName={this.props.match.params.roomid} />
				</div>
			</div>
		)
	}

}

export default Room;

