import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer, Timeline } from 'elements';

import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions'

import * as Helper from 'lib/Helper';
import * as API from 'lib/API';

export class ProfileHomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
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

    componentWillMount() {
        this.pageStart();
    }

    componentDidMount() {
        console.debug(this.state);
    }

    componentDidUpdate() {
        console.debug(this.state);
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

        return (
            <div>
                <MainNav />

                {/* <!-- Begin page content --> */}
                <Timeline
                    handleSelectImageInfo = {selectImageInfo}
                    handleOnChangeTimeLineContents={_handleOnChangeTimeLineContents}
                    handleClickTimeLinePostButton={_handleClickTimeLinePostButton}
                    handleOnChangeTodayImage={_handleOnChangeTodayImage}
                />
                {/* <!-- End page content --> */}

                <Footer />

            </div>

        );
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileHomeComponent));