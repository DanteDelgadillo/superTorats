import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import Main from "./components/main";
import Nav from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Main></Main>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
