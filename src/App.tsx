import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { Provider } from "react-redux";
import rootreducer from './reducers';
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer: rootreducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
