import React, { Component } from 'react'
// import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand navbar" href="/">Super Tortas</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav navMargin ">
                            <li class="nav-item ">
                                <a class="nav-link" href="/">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Menu">Menu</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </React.Fragment>
        )
    }
}