import React, { Fragment } from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers.js";

import Number from "./components/Number";
import IncreaseButton from "./components/IncreaseButton";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Fragment>
      <Number />
      <IncreaseButton />
    </Fragment>
  </Provider>,
  document.getElementById("main")
);
