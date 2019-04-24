import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions';
import { MainNav, Footer } from 'elements/common';
import { AccountPersonalForm } from 'elements';
import NavTabComponent from './NavTabComponent';

import * as API from 'lib/API';
import * as Helper from 'lib/Helper';

export class AccountPersonalComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
            getUserPersonalData: false,

            formData: {
                user_email: '',
                user_phone_number: '',
                user_address: '',
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
        const savePersonalDataResult = await API.postUserPersonalData({
            user_uid: this.state.user_uid,
            user_email: this.state.formData.user_email,
            user_phone_number: this.state.formData.user_phone_number,
            user_address: this.state.formData.user_address,
        });
        putHideLoadingAction();


        if(savePersonalDataResult.status === false) {
            Helper.globalErroraAlert({
                title: '에러',
                text: savePersonalDataResult.message
            })
        } else {
            Helper.globalAlert({
                text: savePersonalDataResult.message
            });
            this.props.history.push('/account/home');

        }
    }

    _setUserUid = () => {
        if(this.state.user_uid === false && Helper.isEmpty(this.props.user_uid) === false) {
            this.setState({
                user_uid: this.props.user_uid
            });
        }
    }

    _getUserPersonalData = async () => {
        if(Helper.isEmpty(this.state.user_uid) === false && Helper.isEmpty(this.props.user_uid) === false && this.state.getUserPersonalData === false) {
            putShowLoadingAction();
            const userPersonalDataResult = await API.getUserPersonalData(this.state.user_uid);
            const { user_email, user_photo_number, user_address } = userPersonalDataResult.data;

            this.setState({
                getUserPersonalData: true,
                formData: {
                    user_email: user_email || '',
                    user_phone_number: user_photo_number || '',
                    user_address: user_address || '',
                }
            });
            putHideLoadingAction();
        }
    }

    pageStart = () => {
        this._setUserUid();
    }

    componentWillMount() {
        this.pageStart();
    }

    componentDidMount() {
        this._getUserPersonalData();
    }


    render() {

        const {
            user_email,
            user_phone_number,
            user_address
        } = this.state.formData;

        const {
            _handleOnChangeItem,
            _handleSaveButton
        } = this;

        return (
            <div>
                <MainNav />
                {/* // <!-- Begin page content --> */}
                <div className="container page-content edit-profile">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">

                            {/* <!-- NAV TABS --> */}
                            <NavTabComponent />
                            {/* <!-- END NAV TABS --> */}

                            <div className="tab-content profile-page">

                                {/* <!-- ACCOUNT TAB CONTENT --> */}
                                <AccountPersonalForm
                                    userEmail = { user_email }
                                    userPhoneNumber={user_phone_number}
                                    userAddress = { user_address }
                                    handleOnchangeItem = { _handleOnChangeItem }
                                    handleSaveButton = { _handleSaveButton }
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
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPersonalComponent));