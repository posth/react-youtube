import GetPublicRooms from '../actions/getRoomsActions'

const initialState = {
  publicRooms: {
      TupacRoom: { playList: 'Tupac' },
      MozartRoom: { playList: 'Mozart' },
      DotosOSTRoom: { playList: 'Dotos OST' }
  }
}

export function getPublic (state = initialState, action) {
  console.log('getPublic', action)
  switch (action.type) {
    case 'GET_PUBLIC_REQUESTED':
      console.log(state,'GET_PUBLIC_REQUESTED')
      return state

    case 'GET_PUBLIC_SUCCESS':
    console.log('good')
      return state

    case 'GET_PUBLIC_FAIL':
    console.log('bad')
      return state

    default:
      return state;
  }
}
