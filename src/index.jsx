import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { store } from './store/store'
import { getPublic } from './reducers/publicRooms'

import App from './app.jsx';

let store = createStore(getPublic)

render(<Provider store={store}><App/></Provider>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector("#app")
    );
  });
}
