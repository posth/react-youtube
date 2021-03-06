import React from 'react';
import { connect } from 'react-redux';
import { createRoom } from './actions';
// import {RoomListDescription} from '../../../Components/RoomListDescription/RoomListDescription';

export class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
    }

		handleSubmit = (event) => {
			event.preventDefault();
			const { target } = event;

			target.reset();
			target.name.focus();

			this.props.createRoom({
				'name': target.name.value,
				'desc': target.description.value
			});
		}

    render() {
        return (
            <div className="room-listings-container pa2 fl w-30 w-100-m flex justify-center">
							<form className="near-white" onSubmit={this.handleSubmit}>
								<h2 className="dark-green" >To Create a Room Type Here!</h2>
								<div className="measure">
									<label htmlFor="name" className="f6 b db mb2 pa1 dark-green">Name</label>
									<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name" />
								</div>
								<div className="measure">
									<label htmlFor="description" className="f6 b db mb2 pa1 dark-green">Description</label>
									<input id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="desc" />
								</div>
								<input type="submit" id="submit" className="f6 link dim br2 ba ph3 pv2 mb2 dib dark-blue bg-white"></input>
							</form>
            </div>
        )
    }
}

export default connect(
  null,
	(dispatch) => ({
		createRoom: (payload) => {
			dispatch(createRoom(payload))
		}
	}),
)(CreateRoom)
