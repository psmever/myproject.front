import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as API from 'lib/API';
import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions';
import { MainNav, Footer, AccountPasswordForm } from 'elements';
import NavTabComponent from './NavTabComponent';

import * as Helper from 'lib/Helper';

export class AccountPasswordComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,

            formData : {
                now_password: '',
                new_password: '',
                new_repassword: ''
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
        const changePasswordDataResult = await API.postUserPasswordChange({
            user_uid: this.state.user_uid,
            now_password: this.state.formData.now_password,
            new_password: this.state.formData.new_password,
            new_repassword: this.state.formData.new_repassword,
        });
        putHideLoadingAction();


        if(changePasswordDataResult.status === false) {
            Helper.globalErroraAlert({
                title: '에러',
                text: changePasswordDataResult.message
            })
        } else {
            Helper.globalAlert({
                text: changePasswordDataResult.message
            });
            localStorage.clear();
            window.location.reload();
        }
    }

    _setUserUid = () => {
        if(this.state.user_uid === false && Helper.isEmpty(this.props.user_uid) === false) {
            this.setState({
                user_uid: this.props.user_uid
            });
        }
    }

    pageStart = () => {
        this._setUserUid();
    }

    componentWillMount() {
        this.pageStart();
    }

    componentDidUpdate(){
        console.debug(this.state.formData);
    }

    render() {
        const {
            _handleOnChangeItem,
            _handleSaveButton
        } = this

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
                                <AccountPasswordForm
                                    handleSaveButton={_handleSaveButton}
                                    handleOnchangeItem={_handleOnChangeItem}
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
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPasswordComponent));