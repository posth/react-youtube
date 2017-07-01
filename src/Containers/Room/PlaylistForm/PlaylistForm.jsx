import React, { Component } from 'react'
import { connect } from 'react-redux'
import YTSearch from 'youtube-api-search'

import { addSong } from './playlistAction'
import SongPlayer from '../../../Components/SongPlayer/SongPlayer'
import Playlist from '../Playlist/Playlist'

import {
	H2,
	Body,
	Input
} from '../../../Components/Styled/Texts';

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

    onInputChange(searchTerm) {
        this.setState({ searchTerm });
        this.videoSearch(searchTerm);
    }

    render() {
        return (
            <div className="playlist-form-container">
                <H2>Search for the song you want to add to the room playlist here:</H2>
                <div>
                    <label>Search:</label>
                    <Input
                        id="song"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        value={this.state.searchTerm}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                </div>
                <div>
                    <SongPlayer selectedVideo={this.state.selectedVideo} />
                    <Button>Add this song to room playlist</Button>
                </div>
                <div>
                    <Body>Select a video to add</Body>
                    <Playlist
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
	null,
	{ addSong }
)(PlaylistForm)
