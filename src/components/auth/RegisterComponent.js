import React, { Component } from "react";
import { SingleNav, Footer, RegisterForm } from 'elements';

import Service from 'lib/Service';
import * as constants from 'lib/Constants';
import debounce from 'lodash/debounce';


export class RegisterComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            registerFormCheckResult : false,

            registerCheckMessage : false,

            registerUserEmailCheck : false,
            registerUserNameCheck : false,
            registerUserPasswordCheck : false,

            register_useremail: '',
            register_username: '',
            register_password: '',
            register_repassword: '',
        }
    }

    _handleRegisterButton = async () => {
        const {register_useremail, register_username, register_password } = this.state;

        const registerResult = await Service.init({
            initType: 'alert',
            method: 'post',
            url: constants.ServiceURL.user_register,
            data: {
                register_useremail: register_useremail,
                register_username: register_username,
                register_password: register_password,
            }
        });

        if(registerResult.initState === true) {
            const { history } = this.props;
            history.push("/auth/login");
        }
    }

    _handleRegisterItemOnChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
        this.validate[name](value);
    }

    validate = {
        register_useremail: () => {
            this.checkServiceUserEmail();
        },
        register_username: () => {
            this.checkServiceUserName();
        },
        register_password: () => {
            this.checkServiceUserPassword();
        },
        register_repassword: () => {
            this.checkServiceUserPassword();
        }
    }

    checkServiceUserEmail = debounce( async () => {
        const register_useremail = this.state.register_useremail ? this.state.register_useremail : false;

        if(register_useremail) {
            const checkResult = await Service.init({
                initType: 'message',
                method: 'post',
                url: constants.ServiceURL.user_register_email_check,
                data: {
                    register_useremail: register_useremail
                }
            });

            if(checkResult.initState === false) {
                this.setState({
                    registerUserNameCheck: false,
                    registerCheckMessage: checkResult.message
                });
            } else if(checkResult.initState === true) {
                this.setState({
                    registerUserNameCheck: true,
                    registerCheckMessage: checkResult.message
                });
            }
        }
    }, 300)

    checkServiceUserName = debounce( async () => {
        const register_username = this.state.register_username ? this.state.register_username : false;

        if(register_username) {
            const checkResult = await Service.init({
                initType: 'message',
                method: 'post',
                url: constants.ServiceURL.user_register_name_check,
                data: {
                    register_username: register_username
                }
            });
            console.debug(checkResult);
            if(checkResult.initState === false) {
                this.setState({
                    registerUserEmailCheck: false,
                    registerCheckMessage: checkResult.message
                });
            } else if(checkResult.initState === true) {
                this.setState({
                    registerUserEmailCheck: true,
                    registerCheckMessage: checkResult.message
                });
            }
        }
    }, 300)

    checkServiceUserPassword = debounce( async () => {
        const register_password = this.state.register_password ? this.state.register_password : false;
        const register_repassword = this.state.register_repassword ? this.state.register_repassword : false;

        if(register_password || register_repassword) {
            const checkResult = await Service.init({
                initType: 'message',
                method: 'post',
                url: constants.ServiceURL.user_register_password_check,
                data: {
                    register_password: register_password,
                    register_repassword: register_repassword
                }
            });

            if(checkResult.initState === false) {
                this.setState({
                    registerUserPasswordCheck: false,
                    registerCheckMessage: checkResult.message
                });
            } else if(checkResult.initState === true) {
                this.setState({
                    registerUserPasswordCheck: true,
                    registerCheckMessage: checkResult.message
                });
            }
        }
    }, 300)


    componentDidUpdate () {
        // console.debug(this.state);
        const { registerUserEmailCheck, registerUserNameCheck, registerUserPasswordCheck, registerFormCheckResult } = this.state;

        if(registerUserEmailCheck === true && registerUserNameCheck === true && registerUserPasswordCheck === true) {
            if(registerFormCheckResult === false) {
                this.setState({
                    registerFormCheckResult: true,
                });
            }
        } else {
            if(registerFormCheckResult === true) {
                this.setState({
                    registerFormCheckResult: false,
                });
            }
        }
    }


    render() {

        const {
            _handleRegisterButton,
            _handleRegisterItemOnChange
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
                                                <h4 className="m-b-0"><span className="icon-text">회웝가입</span></h4>
                                            </div>

                                            <RegisterForm
                                                handleClickButton={ _handleRegisterButton }
                                                handleOnchangeItem={ _handleRegisterItemOnChange }
                                                errorMessage={ this.state.registerCheckMessage }
                                                registerRedy={ this.state.registerFormCheckResult }
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

export default RegisterComponent;