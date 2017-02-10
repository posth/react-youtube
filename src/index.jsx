import React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './app.jsx';

render(<Provider store={store}><App state={store}/></Provider>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <Provider store={store}>
        <App state={store}/>
      </Provider>,
      document.querySelector("#app")
    );
  });
}
