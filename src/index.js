//@ts-check

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// @ts-ignore
// import 'semantic-ui-css/semantic.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './semantic/dist/semantic.min.css';
// @ts-ignore
import animationsReducer from "./store/reducers/animations";

const rootReducer = combineReducers({
  animations: animationsReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

// @ts-ignore
//for redux chrome devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
