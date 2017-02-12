import React from 'react';
import styles from './index.scss';

import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import RoomListings from './Components/RoomListings/RoomListings';
import GetRooms from './Containers/GetRooms';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Header />
        <GetRooms />
        <Footer />
      </div>
    )
  }
}
