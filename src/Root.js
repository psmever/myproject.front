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
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AccountHomeComponent,
    AccountBasicComponent,
    AccountPersonalComponent,
    AccountPasswordComponent,
    ProfileTimelineComponent,
    ProfileFriendComponent,
    ProfilePhotosComponent,
    PhotoViewComponent
} from 'components';

import { GlobalLoading } from 'elements';

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
                const { login_state, access_token, user_profile_set, user_uid, user_image_url, user_name } = loginInfo;

                await putLoginData({
                        login_state: login_state,
                        user_uid: user_uid,
                        access_token: access_token,
                        user_profile_set: user_profile_set,
                        user_image_url: user_image_url,
                        user_name: user_name
                });

                if( login_state === true ) {
                    this.setState({
                        loginstate: true
                    });
                    await putGetSiteBasicData();
                }

                if(login_state !== true) {
                    history.push('/auth/login');
                // } else if( user_profile_set === true) {
                //     history.push('/profile/timeline');
                // } else if( Helper.isEmpty(user_profile_set) === false) {
                //     history.push('/account/home');
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
        Helper.DEBUG({ name:'Root Component WILL MOUNT!', state: this.state})
    }

    componentDidMount() {
        Helper.DEBUG({ name:'Root Component DID MOUNT!', state: this.state})
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'Root Component WILL RECIEVE PROPS!', nextProps: nextProps})
    }

    shouldComponentUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'Root ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        return true;
    }

    componentWillUnmount() {
        Helper.DEBUG({ name:'Root Component WILL UNMOUNT!' , state: this.state})
    }


    componentWillUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'Root Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        Helper.DEBUG({ name:'Root Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }

    componentDidCatch(error, info) {
        Helper.DEBUG({ name:'Root Component DID Catch!' , error: error, info: info})
        //Handle error.
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
                    <Route path='/home' component={ HomeComponent }/>
                    <Route path='/auth/login' component={ LoginComponent }/>
                    <Route path='/auth/logout' component={ LogoutComponent }/>
                    <Route path='/auth/register' component={ RegisterComponent }/>
                    <Route path='/account/home' component={ AccountHomeComponent }/>
                    <Route path='/account/basic' component={ AccountBasicComponent }/>
                    <Route path='/account/personal' component={ AccountPersonalComponent }/>
                    <Route path='/account/password' component={ AccountPasswordComponent }/>
                    <Route path='/profile/timeline' component={ ProfileTimelineComponent }/>
                    <Route path='/profile/friends' component={ ProfileFriendComponent }/>
                    <Route path='/profile/photos' component={ ProfilePhotosComponent }/>
                    <Route path='/post/photo/view/:post_uuid' component={ PhotoViewComponent }/>
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