import React from 'react';
import { connect } from 'react-redux';
import { addSong } from './playlistAction';

export class PlaylistForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        //Stop standard submit process
        event.preventDefault();

        //TODO youtube regex validator before adding it to the songInfo object

        const songInfo = {
            'link': event.target.song.value
        }

        event.target.reset();

        console.log('playlist form container props -------->', this.props);

        this.props.addSong(songInfo);
    }

    render() {
        return (
            <div className="playlist-form-container">
                <form className="dark-blue" onSubmit={this.handleSubmit}>
                    <label>Add song here (YouTube link):</label>
                    <input id="song" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                    <input type="submit" id="submit" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (songInfo) => {
            dispatch(addSong(songInfo))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PlaylistForm)