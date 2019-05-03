import React, { Component } from "react";
import { MainNav, Footer } from 'elements';
import { FriendsRoot } from './friends/FriendsRoot';


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
                <FriendsRoot />
                {/* <!-- End page content --> */}

                <Footer />
            </div>

        );
    }
};

export default ProfileFriendComponent;