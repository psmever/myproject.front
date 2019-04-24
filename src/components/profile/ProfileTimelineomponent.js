import React, { Component } from "react";
import { MainNav, Footer, Timeline } from 'elements';


export class ProfileHomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }




    render() {
        return (
            <div>
                <MainNav />

                {/* <!-- Begin page content --> */}
                <Timeline />
                {/* <!-- End page content --> */}
                <Footer />

            </div>

        );
    }
};

export default ProfileHomeComponent;