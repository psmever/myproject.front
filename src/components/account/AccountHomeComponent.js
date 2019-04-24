import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions'
import { MainNav, Footer, AccountHome } from 'elements';
import NavTabComponent from './NavTabComponent';
import * as API from 'lib/API';

import * as Helper from 'lib/Helper';

export class AccountHomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
            getUserProfileDataResult: false,
            userHomeData: {},
            profileSelectFile: false,
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

    _getUserProfileHomeData = async () => {
        if(Helper.isEmpty(this.state.user_uid) === false && Helper.isEmpty(this.props.user_uid) === false && this.state.getUserProfileDataResult === false) {
            putShowLoadingAction();
            const getResult = await API.getUserProfileHomeData(this.state.user_uid);
            const {
                last_login_date,
                last_login_date_string,
                regist_date,
                user_address,
                user_birthday,
                user_email,
                user_gender,
                user_gender_code_name,
                user_intro,
                user_name,
                user_phone_number,
                user_uid,
                user_web_site,
                profile_image
            } = getResult.data;
            this.setState({
                getUserBasicDataResult: true,
                userHomeData: {
                    last_login_date: last_login_date || '',
                    last_login_date_string: last_login_date_string || '',
                    regist_date: regist_date || '',
                    user_address: user_address || '',
                    user_birthday: user_birthday || '',
                    user_email: user_email || '',
                    user_gender: user_gender || '',
                    user_gender_code_name: user_gender_code_name || '없음',
                    user_intro: user_intro || '',
                    user_name: user_name || '',
                    user_phone_number: user_phone_number || '',
                    user_uid: user_uid || '',
                    user_web_site: user_web_site || '',
                    user_profile_image: profile_image || '',
                }
            });
            putHideLoadingAction();
        }
    }

    componentWillMount() {
        // console.debug({Appcomponent:'componentWillMount'});
        this.pageStart();
    }


    componentDidMount() {
        // console.debug({Appcomponent:'componentDidMount'});
        this._getUserProfileHomeData();
    }

    _handleProfileImageOnchange = (e) => {
        const changeFile = e.target.files[0];
        if(Helper.isEmpty(changeFile.name) === false && Helper.isEmpty(changeFile.size) === false && Helper.isEmpty(changeFile.type) === false) {
            this.setState({
                profileSelectFile: changeFile
            });
        } else {
            this.setState({
                profileSelectFile: false
            });
        }
    }

    _handleProfileImageChangeButton = async (e) => {
        console.debug({file: this.state.profileSelectFile});
        let imageFormData = new FormData();
        imageFormData.append('profile_image', this.state.profileSelectFile)
        imageFormData.append('user_uid', this.state.user_uid)
        // e.preventDefault();
        putShowLoadingAction();
        const saveBasicDataResult = await API.postUserProfilePhotoChange(imageFormData);
        putHideLoadingAction();

        console.debug(saveBasicDataResult);

        if(saveBasicDataResult.status === true) {
            this._getUserProfileHomeData();
        }
    }

    render() {
        const {
            last_login_date,
            last_login_date_string,
            regist_date,
            user_address,
            user_birthday,
            user_email,
            user_gender,
            user_gender_code_name,
            user_intro,
            user_name,
            user_phone_number,
            user_uid,
            user_web_site,
            user_profile_image,
        } = this.state.userHomeData;

        const {
            _handleProfileImageOnchange,
            _handleProfileImageChangeButton
        } = this;

        return (
            <div>

                <MainNav />
                {/* // <!-- Begin page content --> */}
                <div className="container page-content edit-profile">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">

                            {/* <!-- NAV TABS --> */}
                            <NavTabComponent/>
                            {/* <!-- END NAV TABS --> */}

                            <div className="tab-content profile-page">

                                {/* <!-- ACCOUNT TAB CONTENT --> */}
                                <AccountHome
                                    lastLoginDate={last_login_date}
                                    lastLoginDateString={last_login_date_string}
                                    registDate={regist_date}
                                    userAddress={user_address}
                                    userBirthday={user_birthday}
                                    userEmail={user_email}
                                    userGender={user_gender}
                                    userGenderCodeName={user_gender_code_name}
                                    userIntro={user_intro}
                                    userName={user_name}
                                    userPhoneNumber={user_phone_number}
                                    userUid={user_uid}
                                    userWebSite={user_web_site}
                                    userProfileImage={user_profile_image}
                                    handleProfileImageOnchange={_handleProfileImageOnchange}
                                    handleProfileImageButton={_handleProfileImageChangeButton}
                                />
                                {/* <!-- END ACCOUNT TAB CONTENT --> */}

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        );


    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    login: state.base.login,
    account: state.account,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountHomeComponent));