import React, { Component } from "react";
import { MainNav, Footer, Friends } from 'elements';


export class ProfileFriendComponent extends Component {

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
                <Friends />
                {/* <!-- End page content --> */}

                <Footer />
            </div>

        );
    }
};

export default ProfileFriendComponent;