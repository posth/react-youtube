import React, { Component } from 'react';
import SongItem from '../../../Components/SongItem/SongItem';

export class Playlist extends Component {

  constructor(props) {
    super(props);
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
    return (
      <div>
        <ul>
          {this.props.videos ? this.songsListMap() : ''}
        </ul>
      </div>
    )
  }
}

export default Playlist;
