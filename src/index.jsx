import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { store } from './store.js'
import App from './app.jsx';

//root render to dom, pass provider with binds the redux store to the app
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector("#app")
);

// module hot reloading magic
if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    // const App = require('./app.jsx').default;
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector("#app")
    );
  });
}
