import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer } from 'elements';
import { TimelineRoot } from './timeline/TimelineRoot';
// import * as Helper from 'lib/Helper';

import {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
    putGetProfileTopInfo,
    putCheckLoginInfo,
} from 'store/Actions'

export class ProfileTimelineComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            getTimeLineState: false,
            getProfileTopInfoState: false

        }
    }

    componentWillMount() {
        this._getTimeLineList();
    }

    componentDidMount() {
        this.props.putCheckLoginInfo();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user_uid !== this.props.user_uid) {
            this._getProfileTopInfo(nextProps.user_uid);
            this._getTimeLineList(nextProps.user_uid);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const updateState = true;
        return updateState;
    }

    componentWillUnmount() {

    }


    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    _getTimeLineList = async (user_uid) => {
        this.props.putGetProfileTimeList(user_uid);
    }

    _getProfileTopInfo = async (user_uid) => {
        this.props.putGetProfileTopInfo(user_uid);
    }

    render() {
        const { profileTopData } = this.props;

        return (
            <div>
                <MainNav
                    LOGIN_STATE={this.props.login.login_state}
                />

                    {/* <!-- Begin page content --> */}
                    <TimelineRoot
                        TOP_INFO = {profileTopData}
                        USER_UID = {this.props.user_uid}
                        TIME_LINE_LIST = {this.props.timeline_list}
                        GET_TIME_LINE_LIST = {this._getTimeLineList}
                        COMMENT_PUSH = {this._comment_push}
                    />
                    {/* <!-- End page content --> */}

                <Footer />
            </div>

        );
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    login: state.base.login,
    profileTopData: state.profile.profile_top_info.data,
    timeline_first_idx: state.profile.timeline_list.data.first_idx,
    timeline_list: state.profile.timeline_list.data.list,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
    putGetProfileTopInfo,
    putCheckLoginInfo
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileTimelineComponent));