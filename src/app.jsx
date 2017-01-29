import styles from './index.scss';
import React from 'react';

import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import RoomListings from './Components/RoomListings/RoomListings';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //Hardcoded mock roomList to receive
    let roomList = {
      TupacRoom: { playList: 'Tupac' },
      MozartRoom: { playList: 'Mozart' },
      DotosOSTRoom: { playList: 'Dotos OST' }
    }

    this.state = {
      roomList: roomList
    }

  }

  render() {
    return (
      <div>
        <Header></Header>
        <RoomListings playList={this.state.roomList}></RoomListings>
        <Footer></Footer>
      </div>
    )
  }
}
