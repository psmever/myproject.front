import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer, Timeline } from 'elements';

import {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
} from 'store/Actions'

import * as Helper from 'lib/Helper';
import * as API from 'lib/API';

export class ProfileHomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: null,

            get_timeline_list: false,
            today_contents: '',
            today_select_image_info: {
                image_url: '',
                image_upload_idx: '',
            }
        }
    }


    componentWillMount() {
        // console.log({ name:'Component WILL MOUNT!', state: this.state, timeline_list: this.props.timeline_list})
        // this._getTimeListList(this.props.user_uid);
    }

    componentDidMount() {
        // console.log({ name:'Component DID MOUNT!', state: this.state})
    }

    componentWillReceiveProps(nextProps) {
        // console.log({ name:'Component WILL RECIEVE PROPS!', nextProps: nextProps})

        if(nextProps.user_uid !== this.state.user_uid) {
            this._setUserUid(nextProps.user_uid);
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log({ name:'shouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        const updateState = true;

        if(nextState.user_uid !== false && Helper.isEmpty(nextState.user_uid) === false) {
            this._getTimeListList(nextState.user_uid);
        }

        return updateState;
    }

    componentWillUnmount() {
        // console.log({ name:'Component WILL UNMOUNT!' , state: this.state, user_uid: this.props.user_uid, timeline_list: this.props.timeline_list})
        this._getTimeListList(this.props.user_uid);
    }


    componentWillUpdate(nextProps, nextState) {
        // console.log({ name:'Component WILL UPDATE!' , nextProps: nextProps, nextState,nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log({ name:'Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }







    _setUserUid = (user_uid) => {
        this.setState({
            user_uid: user_uid
        });
    }

    _getTimeListList = async (user_uid) => {
        const { putGetProfileTimeList } = this.props;
        putGetProfileTimeList(user_uid);
    }

    _handleOnChangeTimeLineContents = (e) => {
        this.setState({
            today_contents: e.target.value
        });
    }

    _handleClickTimeLinePostButton = async (e) => {
        e.preventDefault();
        const { putShowLoadingAction, putHideLoadingAction } = this.props;
        putShowLoadingAction();
        const todayContentsData = {
            user_uid: this.props.user_uid,
            today_contents: this.state.today_contents,
            image_upload_idx: this.state.today_select_image_info.image_upload_idx
        }
        const saveTodayDataResult = await API.postUserProfileTimeLineTodaySave(todayContentsData);
        if(saveTodayDataResult.status === false) {
            Helper.globalAlert({text: saveTodayDataResult.message})
        }
        this._getTimeListList();
        putHideLoadingAction();

    }

    _handleOnChangeTodayImage = async (e) => {
        const todayImageFile = e.target.files[0];
        if(Helper.isEmpty(todayImageFile.name) === false && Helper.isEmpty(todayImageFile.size) === false && Helper.isEmpty(todayImageFile.type) === false) {

            let imageFormData = new FormData();
            imageFormData.append('user_uid', this.props.user_uid);
            imageFormData.append('today_image', todayImageFile);

            const saveDataResult = await API.postUserProfileTimeLineTodayPhotoSave(imageFormData);

            if(saveDataResult['status'] === false) {
                Helper.globalAlert({text: saveDataResult.message})
            } else {
                this.setState({
                    today_select_image_info: saveDataResult.data
                });
            }
        }
    }

    _handleCommentPush = async (e) => {
        if(Helper.isEmpty(e.comment_contents) === false && Helper.isEmpty(e.post_uuid) === false) {
            const saveCommentDataResult = await API.postUserProfileTimeLineTodayCommentSave(e);

            if(saveCommentDataResult.status === false) {
                Helper.globalAlert({text: saveCommentDataResult.message})
            }
        }

        this._getTimeListList();
    }

    _handlePostLikeButtonOnClick = async (e) => {
        const saveCommentLikeResult = await API.postUserProfileTimeLineLikeButtonClick({
            like_command: 'add',
            post_uuid: e.post_uuid
        });

        if(saveCommentLikeResult.status === false) {
            Helper.globalAlert({text: saveCommentLikeResult.message})
        }

        this._getTimeListList();
    }

    render() {

        const {
            _handleOnChangeTimeLineContents,
            _handleClickTimeLinePostButton,
            _handleOnChangeTodayImage,
            _handleCommentOnChange,
            _handleCommentPush,
            _handlePostLikeButtonOnClick
        } = this;

        const selectImageInfo = this.state.today_select_image_info;

        const userTimelineList = this.props.timeline_list.data;

        return (
            <div>
                <MainNav />

                {/* <!-- Begin page content --> */}
                <Timeline
                    handleSelectImageInfo = {selectImageInfo}
                    handleOnChangeTimeLineContents={_handleOnChangeTimeLineContents}
                    handleClickTimeLinePostButton={_handleClickTimeLinePostButton}
                    handleOnChangeTodayImage={_handleOnChangeTodayImage}
                    userTimelineList={userTimelineList}
                    ONCHANGE_COMMENT={_handleCommentOnChange}
                    COMMENT_PUSH={_handleCommentPush}
                    LIKEBUTTON_CLICK={_handlePostLikeButtonOnClick}
                />
                {/* <!-- End page content --> */}

                <Footer />

            </div>

        );
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    timeline_list: state.profile.timeline_list,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileHomeComponent));