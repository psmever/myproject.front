import React, { Component } from "react";
import { ProfileTop, ProfileNav } from 'elements';

import { TimelineTodayPostWrite } from './TimelineTodayPostWrite';
import { TimelistPostList } from './TimelistPostList';
import * as Helper from 'lib/Helper';


export class TimelineRoot extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }
    }

    _handleGetTimeLineList = () => {
        // console.debug({name: '_handleTimeListPostSuccessEvent'});
        this.props.GET_TIME_LINE_LIST();
    }

    componentWillMount() {
        // console.log({ name:'Component WILL MOUNT!'})
        // this.props.GET_TIME_LINE_LIST();
    }

    render() {

        Helper.DEBUG({props: this.props});

        const { TOP_INFO } = this.props

        return (
            <div className="container page-content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">

                            <ProfileTop
                                top_info = {TOP_INFO}
                            />

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
                                        <div className="col-md-12">
                                            <div className="row">
                                                {/* <!-- left posts--> */}
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-12">

                                                            {/* <!-- post state form --> */}
                                                            <TimelineTodayPostWrite
                                                                USER_UID = {this.props.USER_UID}
                                                                TIME_LIST_POST_SUCCESS = {this._handleGetTimeLineList}
                                                            />
                                                            {/* <!-- end post state form --> */}

                                                            {/* <!--  Begin posts --> */}
                                                            <TimelistPostList
                                                                USER_UID = {this.props.USER_UID}
                                                                TIME_LINE_LIST={this.props.TIME_LINE_LIST}
                                                                GET_TIME_LINE_LIST = {this._handleGetTimeLineList}
                                                            />
                                                            {/* <!--  end posts --> */}

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end left posts--> */}
                                            </div>
                                        </div>
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


export default TimelineRoot;