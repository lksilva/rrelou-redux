import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'

const store = createStore(reducer)

console.log(store.getState());

ReactDOM.render(
  <Provider store = { store }>
    <AppContainer />
 </Provider>, 
document.getElementById('root'));
registerServiceWorker();
