import React, { Component } from "react";
import { MainNav, Footer } from 'elements';
import { PhotosViewRoot } from './photos_view/PhotosViewRoot';

export class ProfilePhotoViewComponent extends Component {

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

                <PhotosViewRoot />

                <Footer />

            </div>

        );
    }
};

export default ProfilePhotoViewComponent;