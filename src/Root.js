import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    TestComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    AccountHomeComponent,
    AccountBasicComponent,
    AccountPersonalComponent,
    AccountPasswordComponent,
    ProfileHomeComponent,
} from 'components';

import { GlobalLoading } from 'elements/common';

import { initialtryLogin, putLoginData, putGetSiteBasicData } from 'store/Actions';

import * as Helper from 'lib/Helper';

class Root extends Component {

    constructor(props) {

        super(props);

        this.state = {
            loginstate: false

        }
    }

    initializeLoginInfo = async () => {
        const { history, putLoginData, putGetSiteBasicData } = this.props;
        const thisLocation = this.props.history.location.pathname;

        const loginInfo = Helper.storageManager.get('logininfo') || null;

        if (thisLocation !== '/auth/login' || thisLocation !== '/auth/register') {

            if( loginInfo === null ) {
                history.push('/auth/login');
            } else {
                const { login_state, access_token, user_profile_set, user_uid } = loginInfo;

                await putLoginData({
                        login_state: login_state,
                        user_uid: user_uid,
                        access_token: access_token,
                        user_profile_set: user_profile_set,
                });

                if( login_state === true ) {
                    this.setState({
                        loginstate: true
                    });
                    await putGetSiteBasicData();
                }

                if(login_state !== true) {
                    history.push('/auth/login');
                } else if( user_profile_set !== true) {
                    history.push('/profile/home');
                }
            }
        }
    }

    getSiteCodeList() {
        const { putGetCodeList } = this.props;

        if(this.state.loginstate === true && this.props.code_list.state === false) {
            putGetCodeList();
        }
    }

    componentWillMount() {
        // console.debug({Rootcomponent:'componentWillMount'});
    }

    componentDidMount() {
        // console.debug({Rootcomponent:'componentDidMount'});
        this.initializeLoginInfo();
    }

    componentWillReceiveProps(nextProps) {
        // console.debug({Rootcomponent:'componentWillReceiveProps',nextProps:nextProps});

    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.debug({Rootcomponent:'shouldComponentUpdate',nextProps:nextProps, nextState:nextState});
        return true / false;
    }

    componentWillUpdate(nextProps, nextState) {
        // console.debug({Rootcomponent:'componentWillUpdate',nextProps:nextProps,nextState:nextState});
    }

    componentDidUpdate(prevProps, prevState) {
        // console.debug({Rootcomponent:'componentDidUpdate',prevProps:prevProps,prevState:prevState});
        // console.debug({RootAppState:this.state});

        const loginInfo = Helper.storageManager.get('logininfo') || null;
        if(Helper.isEmpty(loginInfo) === false ) {
            console.debug({
                user_uid: loginInfo.user_uid,
                access_token: loginInfo.access_token
            });
        }
    }

    componentWillUnmount() {
        // console.debug({Rootcomponent:'componentWillUnmount'});
    }


    render() {
        const isLoading = this.props.loading;

        if( isLoading ) {
            return (
                <div>
                    <GlobalLoading />
                </div>
            );
        } else {
            return (
                <Switch>
                    <Route path='/test' component={ TestComponent }/>
                    <Route exact path='/' component={ MainComponent }/>
                    <Route path='/main' component={ MainComponent }/>
                    <Route path='/auth/login' component={ LoginComponent }/>
                    <Route path='/auth/register' component={ RegisterComponent }/>
                    <Route path='/account/home' component={ AccountHomeComponent }/>
                    <Route path='/account/basic' component={ AccountBasicComponent }/>
                    <Route path='/account/personal' component={ AccountPersonalComponent }/>
                    <Route path='/account/password' component={ AccountPasswordComponent }/>
                    <Route path='/profile/home' component={ ProfileHomeComponent }/>
                </Switch>
            );
        }
    }
}

const mapStateToProps = state => ({
    login: state.base.login,
    loading: state.base.loading,
    code_list: state.base.code_list
});

const mapDispatchToProps = {
    initialtryLogin,
    putLoginData,
    putGetSiteBasicData
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Root));