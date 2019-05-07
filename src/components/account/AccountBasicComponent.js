import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as API from 'lib/API';
import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions';
import { MainNav, Footer, AccountBasicForm } from 'elements';

import NavTabComponent from './NavTabComponent';

import * as Helper from 'lib/Helper';


export class AccountHomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            getGenderCodeState : false,
            getUserBaseicData: false,

            user_uid : false,
            genderCodeList: [],
            formData: {
                user_name: '',
                user_gender: '',
                user_birth_year: '',
                user_birth_month: '',
                user_birth_day: '',
                user_web_site: '',
                user_intro: '',
            }
        }
    }

    _handleOnChangeItem = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => {
            prevState = JSON.parse(JSON.stringify(this.state.formData));
            prevState[name] = value;
            return {
                formData: prevState
            };
         });
    }

    _handleSaveButton = async (e) => {
        e.preventDefault();
        putShowLoadingAction();
        const saveBasicDataResult = await API.postUserBasicData({
            user_uid: this.state.user_uid,
            user_name: this.state.formData.user_name,
            user_gender: this.state.formData.user_gender,
            user_birth_year: this.state.formData.user_birth_year,
            user_birth_month: this.state.formData.user_birth_month,
            user_birth_day: this.state.formData.user_birth_day,
            user_web_site: this.state.formData.user_web_site,
            user_intro: this.state.formData.user_intro,
        });
        putHideLoadingAction();

        if(saveBasicDataResult.status === false) {
            Helper.globalErroraAlert({
                title: '에러',
                text: saveBasicDataResult.message
            })
        } else {
            Helper.globalAlert({
                text: saveBasicDataResult.message
            });
            const loginInfo = Helper.storageManager.get('logininfo') || null;
            Helper.storageManager.set('logininfo', {
                login_state: true,
                user_uid: loginInfo.user_uid,
                user_name: loginInfo.user_name,
                access_token: loginInfo.access_token,
                user_profile_set: true,
                user_image_url: loginInfo.user_image_url,
            });
            this.props.history.push('/account/home');
        }
    }

    pageStart = () => {
        this._setUserUid();
        this._getGenderCodelist();
    }

    _setUserUid = () => {
        if(this.state.user_uid === false && Helper.isEmpty(this.props.user_uid) === false) {
            this.setState({
                user_uid: this.props.user_uid
            });
        }
    }
    _getGenderCodelist = () => {
        if(this.props.site_base_data.getState === true && this.state.getGenderCodeState === false) {
            this.setState({
                getDataState: {
                    genderCode : true
                },
                genderCodeList : this.props.site_base_data.data.code_list.S01
            });
        }
    }

    _getUserBasicData = async () => {
        if(Helper.isEmpty(this.state.user_uid) === false && Helper.isEmpty(this.props.user_uid) === false && this.state.getUserBaseicData === false) {
            putShowLoadingAction();
            const userBasicDataResult = await API.getUserBasicData(this.state.user_uid);
            const { user_name, user_gender, user_web_site, user_intro, user_birth_year, user_birth_month, user_birth_day } = userBasicDataResult.data;
            this.setState({
                getDataState: {
                    userBaseicData : true
                },
                formData: {
                    user_name: user_name || '',
                    user_gender: user_gender || '',
                    user_web_site: user_web_site || '',
                    user_intro: user_intro || '',
                    user_birth_year: user_birth_year || '',
                    user_birth_month: user_birth_month || '',
                    user_birth_day: user_birth_day || '',
                }
            });
            putHideLoadingAction();
        }
    }

    componentWillMount() {
        this.pageStart();

    }

    componentDidMount() {
        this._getUserBasicData();
    }

    render() {

        const { user_name, user_gender, user_web_site, user_intro, user_birth_year, user_birth_month, user_birth_day } = this.state.formData;
        const { _handleOnChangeItem, _handleSaveButton } = this;

        const genderSelectData = this.state.genderCodeList.map((item) => {
            return {
                id: item.code_id,
                name: item.code_name,
            }
        })

        return (
            <div>
                <MainNav
                    LOGIN_STATE={this.props.login.login_state}
                />
                {/* // <!-- Begin page content --> */}
                <div className="container page-content edit-profile">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">

                            {/* <!-- NAV TABS --> */}
                            <NavTabComponent />
                            {/* <!-- END NAV TABS --> */}

                            <div className="tab-content profile-page">

                                {/* <!-- ACCOUNT TAB CONTENT --> */}
                                <AccountBasicForm
                                    userName={user_name}
                                    userGender={user_gender}
                                    UserWebSite={user_web_site}
                                    userIntro={user_intro}
                                    userBirthYear={user_birth_year}
                                    userBirthMonth={user_birth_month}
                                    userBirthDay={user_birth_day}
                                    genderSelectData={genderSelectData}
                                    handleOnchangeItem={_handleOnChangeItem}
                                    handleSaveButton={_handleSaveButton}
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

AccountHomeComponent.defaultProps = {
    basicData: {
        user_name: '정보를 입력해 주세요.',
        user_gender: '정보를 입력해 주세요.',
        user_web_site: '정보를 입력해 주세요.',
        user_intro: '정보를 입력해 주세요.',
    },
    gender_code_list: {
        C01: {
            code_id: '',
            code_name: '',
        }
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    site_base_data: state.base.site_base_data,
    login: state.base.login,
    basicData: state.account.user_basic_data,
    basicDataSave: state.account.user_basic_data_save_state,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
    // getUserBasicData,
    // putAccountBasicSave,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountHomeComponent));