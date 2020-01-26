import React, { Component } from 'react'
import YelpImage from "../photos/yelp.png";


export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="phantomStyle" />
                <div className="footer-Flex">
                    <div className="ss">Review Us On </div>
                    <div ><a href="https://www.yelp.com/biz/super-tortas-sun-valley" target="_blank" rel="noopener noreferrer"><img src={YelpImage} alt="yelp" className="yelpimage" /> </a></div>
                </div>


            </React.Fragment>
        )
    }
}