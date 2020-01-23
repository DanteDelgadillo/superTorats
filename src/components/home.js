import React from "react";

const Home = () => {
    return (
        <React.Fragment>
            <div className="home-flex-container">
                <div className="sideimage">

                </div>
                <div className="homeFlex">
                    2222
                </div>
                <div className="sideimage2">

                </div>
            </div>
            {/* ***********Our Location******* */}
            <div className="location-container">
                <div>
                    <ul className="locat">
                        <li className="locatTitle" >Our Location</li>
                    </ul>
                    <div className="loactText">
                        <ul className="locat">
                            <li>Super Tortas</li>
                            <li>7949 Vineland Ave
                            Sun Valley, CA 91352
                            Sun Valley
                            </li>
                            <li>(818) 765-2496</li>
                        </ul>
                    </div>
                    <div className="loactText">
                        <ul className="locat">
                            <li>Mon - Sat:10:00 am - 8:00 pm</li>
                            <li>Sun: 11:00 am - 8:00 pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;