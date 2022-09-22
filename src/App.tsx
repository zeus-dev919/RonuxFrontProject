import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { Provider } from "react-redux";
import rootreducer from './reducers';
import { configureStore } from "@reduxjs/toolkit";
import { SnackbarProvider } from "notistack";
const store = configureStore({ reducer: rootreducer });

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;
