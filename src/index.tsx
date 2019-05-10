import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import App from "src/app";

import "./styles.scss";

import createStore from "./redux/store";

const storageKey = "video-player";

const previousState = localStorage.getItem(storageKey);

let store: ReturnType<typeof createStore>;

if (previousState) {
  store = createStore(JSON.parse(previousState));
} else {
  store = createStore();
}

store.subscribe(() => {
  localStorage.setItem(storageKey, JSON.stringify(store.getState()));
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
