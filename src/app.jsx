import React from 'react';
// import styles from './index.scss';

import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Routing from './routing';

export default class App extends React.Component {

  render() {
    return (
      <div className="black-80">
        <Header />
          <Routing />
        <Footer />
      </div>
    )
  }
}

