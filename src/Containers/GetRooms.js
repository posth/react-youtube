import { connect } from 'react-redux'
import { getPublic } from '../actions/getRoomsActions'
import RoomListings from '../Components/RoomListings/RoomListings'

//Hardcoded mock roomList to receive

const mapStateToProps = (state) => {
  return {
    publicRooms: state.getPublic.publicRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPublic: () => {
      dispatch(getPublic())
    }
  }
}

const GetRooms = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListings)

export default GetRooms
