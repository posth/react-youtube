import React from 'react';
import styles from './index.scss';


import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import RoomListings from './Components/RoomListings/RoomListings';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //Hardcoded mock roomList to receive
    this.state = {
      roomList: {
        TupacRoom: { playList: 'Tupac' },
        MozartRoom: { playList: 'Mozart' },
        DotosOSTRoom: { playList: 'Dotos OST' }
      }
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
