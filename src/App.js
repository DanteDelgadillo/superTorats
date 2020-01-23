import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import Main from "./components/main";
import Nav from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <div className="fullbody">
          <div className="main">
            <Nav />
            <Main></Main>
          </div>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
