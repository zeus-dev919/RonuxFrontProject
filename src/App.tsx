import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
