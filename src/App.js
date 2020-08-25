import React from 'react';
import MainComponent from "./components/main-component";
import {BrowserRouter} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainComponent/>
    </BrowserRouter>
  );
}

export default App;
