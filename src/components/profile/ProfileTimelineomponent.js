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
            today_contents: this.state.today_contents
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

            console.debug({
                info: saveDataResult
            });
        }
    }

    render() {

        const {
            _handleOnChangeTimeLineContents,
            _handleClickTimeLinePostButton,
            _handleOnChangeTodayImage
        } = this;

        return (
            <div>
                <MainNav />

                {/* <!-- Begin page content --> */}
                <Timeline
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