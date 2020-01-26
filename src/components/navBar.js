import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import SuperLogo from "../photos/Super.png";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand navbar" href="/"><img src={SuperLogo} alt="logo" className="logo" />Super Tortas</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navMargin ">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Menu">Menu</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </React.Fragment>
        )
    }
}