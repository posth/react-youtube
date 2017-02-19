import React from 'react';
// import styles from './index.scss';

import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import RoomListings from './Containers/Home/PublicRoomsList/RoomListings';
import CreateRoom from './Containers/Home/CreateRoom/CreateRoom';
import Routing from './routing';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
          <Routing />
        <Footer />
      </div>
    )
  }
}

