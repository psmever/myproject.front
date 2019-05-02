import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { SingleNav, Footer, LoginForm } from 'elements';
import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions';

import * as Helper from 'lib/Helper';
import Service from 'lib/Service';
import * as constants from 'lib/Constants';

export class LoginComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            login_try_result: false,

            login_email: '',
            login_password: '',
        }
    }

    loginTrySuccess = () => {

    }

    _handleLoginButton = async () => {

        const { putShowLoadingAction, putHideLoadingAction, history } = this.props;
        const {login_email,login_password} = this.state;

        putShowLoadingAction();
        const loginResult = await Service.init({
            initType: 'return',
            method: 'post',
            url: constants.ServiceURL.user_login,
            data: {
                login_email: login_email,
                login_password: login_password,
            }
        });
        putHideLoadingAction();

        if( loginResult.initState === true ) {
            Helper.storageManager.set('logininfo', {
                login_state: true,
                user_uid: loginResult.payload.data.user_uid,
                access_token: loginResult.payload.data.access_token,
                user_profile_set: loginResult.payload.data.user_profile_state,
                user_image_url: loginResult.payload.data.user_image_url,
            });
            Helper.globalAlert({text: loginResult.payload.message});
            history.push('/profile/timeline');
        } else {
            Helper.globalErroraAlert({text: loginResult.payload.message});
        }
    }

    _handleRegisterButton = () => {
        const { history } = this.props;
        history.push("/auth/register");
    }

    _handleOnchangeItem = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate() {
        // console.debug(':componentDidUpdate:',this.state);
    }



    render() {

        const {
            _handleOnchangeItem,
            _handleLoginButton,
            _handleRegisterButton
        } = this;

        return (
            <div>
                {/* <!-- Fixed navbar --> */}
                <SingleNav />

                <div className="wrapper">

                    <div className="parallax filter-black">
                        <div className="parallax-image"></div>
                        <div className="small-info">
                            <div className="col-sm-10 col-sm-push-1 col-md-5 col-md-push-4 col-lg-3 col-lg-push-5">
                                <div className="card-group animated flipInX">
                                    <div className="card">
                                        <div className="card-block">
                                            <div className="center">
                                                <h4 className="m-b-0"><span className="icon-text">로그인</span></h4>
                                            </div>

                                            <LoginForm
                                                handleOnchangeItem={_handleOnchangeItem}
                                                loginButton={_handleLoginButton}
                                                registerButton={_handleRegisterButton}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        );


    }
};

// export default withRouter(LoginComponent);

const mapStateToProps = state => ({
    base: state.base
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent));