import React, { Component } from "react";
import { MainNav, Footer, Photos } from 'elements';


export class ProfilePhotoComponent extends Component {

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

                <Photos />

                <Footer />
            </div>

        );
    }
};

export default ProfilePhotoComponent;