import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom' 
import './index.css';
import App from './App';
import {Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import * as serviceWorker from './serviceWorker';
import Second from './components/Second';
import Orders from './components/Orders';
import Summary from './components/Summary';

const store=createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/orders" exact component={Second} />
        <Route path="/finals" exact component={Orders} />
        <Route path="/summary" exact component={Summary} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
