import React from 'react';
import { connect } from 'react-redux';
import { getActiveRoom } from './playlistAction.js'
import SongItem from './SongItem';

export class Playlist extends React.Component{


	componentWillMount() {
		this.props.getActiveRoom(this.props.roomName);
	}

	// function that maps over the current songs in room and reterns list elements
	songsListMap = () => {
		 return this.props.activeRoom.songs.map((song, key) => <SongItem key={key} song={song} />);
	}

    render() {
			console.log(this.props.activeRoom, 'activeRoom');
        return (
            <div>
                <h1>{this.props.activeRoom.name}</h1>
								<p className="white" >{this.props.activeRoom.desc}</p>
								<ul>
									{this.props.activeRoom.songs ? this.songsListMap() : ''}
								</ul>
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
