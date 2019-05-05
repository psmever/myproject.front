import React, { Component } from "react";
import { MainNav, Footer } from 'elements';
import { PhotoViewRoot } from './sub/PhotoViewRoot';

export class PhotoViewComponent extends Component {

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

                <PhotoViewRoot />

                <Footer />

            </div>

        );
    }
};

export default PhotoViewComponent;