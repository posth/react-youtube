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

			const data = {
				'name': event.target.name.value,
				'desc': event.target.description.value
			}

			event.target.reset();
			event.target.name.focus();

			this.props.createRoom(data);
		}

    render() {
        return (
            <div className="room-listings-container pa2 fl w-50">
							<form className="black-80" onSubmit={this.handleSubmit}>
								<h2>To Create a Room Type Here!</h2>
								<div className="measure">
									<label htmlFor="name" className="f6 b db mb2 pa1">Name</label>
									<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name" />
								</div>
								<div className="measure">
									<label htmlFor="description" className="f6 b db mb2 pa1">Description</label>
									<input id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="desc" />
								</div>
								<input type="submit" id="submit" className="f6 link dim br2 ba ph3 pv2 mb2 dib dark-blue bg-white"></input>
							</form>
            </div>
        )
    }
}

// const null = (state) => {
//   return {
//     createRoom: state.getPublic.createRoom
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    createRoom: (payload) => {
      dispatch(createRoom(payload))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateRoom)
