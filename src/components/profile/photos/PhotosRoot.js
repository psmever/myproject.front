import React, { Component } from "react";
import { ProfileTop, ProfileNav } from 'elements';

import { PhotosList } from './PhotosList';
// import * as Helper from 'lib/Helper';

export class PhotosRoot extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }
    }

    render() {
        // Helper.DEBUG({
        //     name: 'PhotosRoot render',
        //     props: this.props
        // })
        return (
            <div className="container page-content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">

                            <ProfileTop TOP_INFO = {this.props.TOP_INFO} />

                        </div>
                        <div className="row">

                            {/* <!-- Nav tabs --> */}
                            <ProfileNav />

                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">

                                {/* <!-- Timeline --> */}
                                <div role="tabpanel" className="tab-pane active" id="timeline">
                                    <div className="row">

                                        {/* <!--============= timeline posts--> */}
                                        <PhotosList
                                            USER_UID = {this.props.USER_UID}
                                            PHOTOS_LIST={this.props.PHOTOS_LIST}
                                            GET_PHOTOS_LIST = {this.GET_PHOTOS_LIST}
                                        />
                                        {/* <!-- end timeline posts--> */}

                                    </div>
                                </div>
                                {/* <!-- end timeline --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PhotosRoot;