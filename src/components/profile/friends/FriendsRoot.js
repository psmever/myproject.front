import React, { Component } from "react";

import { ProfileTop, ProfileNav } from 'elements';

import { FriendsList } from './FriendsList';

export class FriendsRoot extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }
    }

    _handleGetTimeLineList = () => {
        this.props.GET_TIME_LINE_LIST(this.props.USER_UID);
    }


    render() {
        return (
            <div className="container page-content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">

                            <ProfileTop />

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
                                        <FriendsList />
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


export default FriendsRoot;