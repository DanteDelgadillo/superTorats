import React, { Component } from 'react'
// import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand navbar" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " >
                        <div className="navbar-nav ">
                            <a className="nav-item nav-link " href="/">Home</a>
                            <a className="nav-item nav-link" href="/Menu">Menu</a>
                            <a className="nav-item nav-link" href="/">About</a>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        )
    }
}