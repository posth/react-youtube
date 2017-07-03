import React, { Component } from 'react'
import { connect } from 'react-redux'
import YTSearch from 'youtube-api-search'

import { addSong } from './playlistAction'
import SongPlayer from '../../../Components/SongPlayer/SongPlayer'
import Playlist from '../Playlist/Playlist'

//Youtube Data Browser API Key
import { YT_API_KEY } from '../../../Config/youtubeAPIKey.js';

export class PlaylistForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            videos: [],
            selectedVideo: null
        };
    }

    videoSearch(term) {
        YTSearch({ key: YT_API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    onInputChange(searchTerm) {
        this.setState({ searchTerm });
        this.videoSearch(searchTerm);
    }

    addCurrentSong(selectedVideo) {

        if (selectedVideo) {
            let currentSongInfo = {
                selectedVideo,
                roomId: this.props.roomId
            }
            this.props.addSong(currentSongInfo);
        }
    }

    render() {
        return (
            <div className="pa3 b--dotted">
                <h2>Search for the song you want to add to the room playlist here:</h2>
                <div>
                    <label>Search:</label>
                    <input
                        id="song"
                        className="input-reset ba b--black-20 pa2 mb2 db w-70"
                        value={this.state.searchTerm}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                </div>
                <div>
                    <SongPlayer selectedVideo={this.state.selectedVideo} />
                    <button onClick={() => { this.addCurrentSong(this.state.selectedVideo) }}>Add this song to room playlist</button>
                </div>
                <div>
                    <p>Select a video to add</p>
                    <Playlist
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (songInfo) => {
            dispatch(addSong(songInfo))
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PlaylistForm)
