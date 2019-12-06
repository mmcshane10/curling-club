import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const render = (Component) => {

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <HashRouter>
          <Component />
        </HashRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable*/
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable*/