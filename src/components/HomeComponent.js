import React, { Component } from "react";
import { MainNav, Footer } from 'elements';
import { HomeRootComponent } from './home/HomeRootComponent';

export class HomeComponent extends Component {

    render() {
        return (
            <div>
                <MainNav />

                {/* <!-- Begin page content --> */}
                <HomeRootComponent />
                {/* <!-- End page content --> */}

                <Footer />
            </div>
        );
    }
};

export default HomeComponent;