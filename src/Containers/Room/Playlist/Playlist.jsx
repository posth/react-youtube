import React from 'react';
import { connect } from 'react-redux';
import { getActiveRoom } from './playlistAction.js'

export class Playlist extends React.Component{


	componentWillMount() {
		this.props.getActiveRoom(this.props.roomName);
	}

	songsListMap = () => {
		 let hey = (Object.keys(this.props.activeRoom.songs).map(function(key) {
			 console.log(key)
			 console.log(this.props.activeRoom[key])
					return this.props.activeRoom[key]
			}));

		console.log(this.props.activeRoom.songs, 'what is this?')
		console.log(hey, 'what is this? after')
		//  let mappedSongs = this.props.activeRoom.songs.map( (song, key) => <li className="white" key={key}> {song} </li>)
		//  return mappedSongs;
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
