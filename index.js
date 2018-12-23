/** @format */

import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import App from "./app/containers/App";
import configureStore from "./app/store";
import { name as appName } from "./app.json";
import CakeDetail from "./app/components/Shop/CakeDetail";
import Payment from "./app/components/Payment";

const store = configureStore();

const MyApp = () => (
  // <Provider store={store}>
  //   <App />
  // </Provider>
  // <CakeDetail />
  <Payment />
);

AppRegistry.registerComponent(appName, () => MyApp);
