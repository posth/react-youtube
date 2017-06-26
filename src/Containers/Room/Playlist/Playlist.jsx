import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveRoom } from './playlistAction.js'
import SongItem from './SongItem';

export class Playlist extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getActiveRoom(this.props.roomName);
  }

  // function that maps over the current songs in room and reterns list elements
  songsListMap = () => {
    return this.props.videos.map((video, key) => <SongItem
      key={key}
      video={video}
      onVideoSelect={this.props.onVideoSelect}
    />);
  }

  render() {
    console.log(this.props.activeRoom, 'activeRoom');
    return (
      <div>
        <h1>{this.props.activeRoom.name}</h1>
        <p className="black" >Room Description: {this.props.activeRoom.desc}</p>
        <ul>
          {this.props.videos ? this.songsListMap() : ''}
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
