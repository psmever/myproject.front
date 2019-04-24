import React, { Component } from "react";
import { MainNav, Footer } from 'elements/common';


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



                <Footer />
            </div>

        );
    }
};

export default ProfilePhotoComponent;