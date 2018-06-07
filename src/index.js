import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Switch } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();



// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({
  name: 'Super Market', actionsBlacklist: ['REDUX_STORAGE_SAVE']
});

const store = createStore(
  routerReducer,
  composeEnhancers(applyMiddleware(middleware, thunk, logger)),
)


const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);


const AppContainer = () => (
  <ConnectedSwitch>
    <App/>
  </ConnectedSwitch>
);


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<AppContainer />
		</ConnectedRouter>
	</Provider>, 

	document.getElementById('root'));
registerServiceWorker();
