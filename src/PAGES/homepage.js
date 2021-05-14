import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Navbar from '../COMPONENTS/Header/Navbar.js';
import HomePageLeftPanel from '../COMPONENTS/HomePageLeftPanel.jsx';
import PhoneSvg from '../COMPONENTS/PhoneSvg.jsx';
import RatingsTable from '../COMPONENTS/RatingsTable';
import ThirdPanel from '../COMPONENTS/THIRD PANEL/ThirdPanel.jsx';

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="homepage-container">
                <HomePageLeftPanel />
                <div className="">
                    <PhoneSvg className="phone" />
                </div>
            </div>

           <RatingsTable />
           <ThirdPanel />
        </Fragment>
    )
}

export default Homepage;