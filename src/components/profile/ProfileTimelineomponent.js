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
            user_uid: false,

            get_timeline_list: false,
            today_contents: '',
            today_select_image_info: {
                image_url: '',
                image_upload_idx: '',
            }
        }
    }


    pageStart = () => {
        this._setUserUid();
    }

    _setUserUid = () => {
        if(this.state.user_uid === false && Helper.isEmpty(this.props.user_uid) === false) {
            this.setState({
                user_uid: this.props.user_uid
            });
        }
    }

    _getTimeListList = () => {

        if(this.props.timeline_list.state === false && Helper.isEmpty(this.props.user_uid) === false && this.state.get_timeline_list === false) {
            this.props.putGetProfileTimeList(this.state.user_uid);

            this.setState({
                get_timeline_list: true
            });
        }
    }

    componentWillMount() {
        this.pageStart();
    }

    componentDidMount() {
        // console.debug(this.state);

        this._getTimeListList();
    }

    componentDidUpdate() {
        // console.debug(this.state);
    }

    _handleOnChangeTimeLineContents = (e) => {
        this.setState({
            today_contents: e.target.value
        });
    }

    _handleClickTimeLinePostButton = async (e) => {
        e.preventDefault();
        const { putShowLoadingAction, putHideLoadingAction } = this.props;
        const todayContentsData = {
            user_uid: this.state.user_uid,
            today_contents: this.state.today_contents,
            image_upload_idx: this.state.today_select_image_info.image_upload_idx
        }
        putShowLoadingAction();
        const saveTodayDataResult = await API.postUserProfileTimeLineTodaySave(todayContentsData);
        putHideLoadingAction();

        if(saveTodayDataResult.status === false) {
            Helper.globalAlert({text: saveTodayDataResult.message})
        }

        this.setState({
            get_timeline_list: false
        });

    }

    _handleOnChangeTodayImage = async (e) => {
        const todayImageFile = e.target.files[0];
        if(Helper.isEmpty(todayImageFile.name) === false && Helper.isEmpty(todayImageFile.size) === false && Helper.isEmpty(todayImageFile.type) === false) {

            let imageFormData = new FormData();
            imageFormData.append('user_uid', this.state.user_uid);
            imageFormData.append('today_image', todayImageFile);

            putShowLoadingAction();
            const saveDataResult = await API.postUserProfileTimeLineTodayPhotoSave(imageFormData);
            putHideLoadingAction();

            if(saveDataResult['status'] === false) {
                Helper.globalAlert({text: saveDataResult.message})
            } else {
                this.setState({
                    today_select_image_info: saveDataResult.data
                });
            }
        }


    }

    render() {

        const {
            _handleOnChangeTimeLineContents,
            _handleClickTimeLinePostButton,
            _handleOnChangeTodayImage
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