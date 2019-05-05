import React, { Component } from "react";
// import { PhotosView } from './PhotosView';

import {
    DefaultComment,
    CommentForm,
    PhotoViewInfo,
    PhotoViewHead
} from 'elements';

export class PhotoViewRoot extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }
    }

    render() {

        return (

            // <!-- Begin page content -->
            <div className="container page-content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">

                                <PhotoViewHead></PhotoViewHead>

                            <div className="profile-info col-md-8">
                                {/* <!--   posts --> */}
                                <div className="box box-widget">

                                    <PhotoViewInfo></PhotoViewInfo>

                                    <DefaultComment></DefaultComment>

                                    <div className="box-footer" style={{display: "block"}}>

                                        <CommentForm></CommentForm>

                                    </div>
                                </div>
                                {/* <!--  end posts --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default PhotoViewRoot;