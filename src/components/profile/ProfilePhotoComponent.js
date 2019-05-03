import React, { Component } from "react";
import { MainNav, Footer } from 'elements';

import { PhotosRoot } from './photos/PhotosRoot';


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

                <PhotosRoot />

                <Footer />
            </div>

        );
    }
};

export default ProfilePhotoComponent;