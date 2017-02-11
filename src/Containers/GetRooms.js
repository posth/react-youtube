import { connect } from 'react-redux'
import { getPublic } from '../actions/getRoomsActions'
import RoomListings from '../Components/RoomListings/RoomListings'


// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state)
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getPublic: () => {
      dispatch(getPublic())
    }
  }
}

const GetRooms = connect(
  null,
  mapDispatchToProps
)(RoomListings)

export default GetRooms
