import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer } from 'elements';
import { TimelineRoot } from './timeline/TimelineRoot';
import * as Helper from 'lib/Helper';

import {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
    putGetProfileTopInfo,
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
        // console.log({ name:'Component WILL MOUNT!', state: this.state})
        // this._getTimeLineList();
    }

    componentDidMount() {
        // console.log({ name:'Component DID MOUNT!', state: this.state, props: this.props})
    }

    componentWillReceiveProps(nextProps) {
        // console.log({ name:'Component WILL RECIEVE PROPS!', nextProps: nextProps})


        // if(Helper.isEmpty(nextProps.user_uid) === false) {
        //     this._getTimeLineList();
        // }

        if(Helper.isEmpty(nextProps.user_uid) === false) {
            this._getProfileTopInfo();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log({ name:'shouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        const updateState = true;

        return updateState;
    }

    componentWillUnmount() {
        // console.log({ name:'Component WILL UNMOUNT!' , state: this.state, props: this.props})
    }


    componentWillUpdate(nextProps, nextState) {
        // console.log({ name:'Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log({ name:'Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }

    _getTimeLineList = async () => {
        if(Helper.isEmpty(this.props.user_uid) === false) {
            this.props.putGetProfileTimeList(this.props.user_uid);

            if(this.state.getTimeLineState === false) {
                this.setState({
                    getTimeLineState: true
                })
            }

            // this.props.putGetProfileTopInfo(this.props.user_uid);
        }
    }

    _getProfileTopInfo = async () => {
        if(Helper.isEmpty(this.props.user_uid) === false) {
            this.props.putGetProfileTopInfo(this.props.user_uid);
            this.setState({
                getProfileTopInfoState: true
            })
        }
    }

    render() {
        Helper.DEBUG({props: this.props});

        const { topData } = this.props;
        return (
            <div>
                <MainNav />

                    {/* <!-- Begin page content --> */}
                    <TimelineRoot
                        TOP_INFO = {topData}
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
    topData: state.profile.profile_top_info.data,
    timeline_list: state.profile.timeline_list.data,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
    putGetProfileTopInfo
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileTimelineComponent));