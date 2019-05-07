import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import _ from 'lodash';

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


const stateInitialize = {
    pageState: false,
    loginstate: false
};

class Root extends Component {

    constructor(props) {

        super(props);

        this.state = stateInitialize;
    }

    goLoginPage = () => {
        const thisLocation = this.props.history.location.pathname;
        if(thisLocation !== '/home' || thisLocation !== '/main') {
            // this.props.history.push('/auth/login');
        }
    }

    rootLoginCheck = () => {
        Helper.DEBUG({name:'::rootLoginCheck::'});
        const thisLocation = this.props.history.location.pathname;
        if (thisLocation !== '/auth/login' || thisLocation !== '/auth/register') {

            const loginInfo = Helper.storageManager.get('logininfo') || null;

            if(_.isEmpty(loginInfo)) {
                this.goLoginPage();
                return false;
            }
        }
    }

    baseInitialize = () => {

    }

    componentWillMount() {
        Helper.DEBUG({ name:'Root Component WILL MOUNT!', state: this.state})
    }

    componentDidMount() {
        Helper.DEBUG({ name:'Root Component DID MOUNT!', state: this.state})
        this.baseInitialize();
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'Root Component WILL RECIEVE PROPS!', nextProps: nextProps})
        const nowPathName = this.props.history.location.pathname;
        if(
            _.isEqual(nowPathName, '/account/login') ||
            _.isEqual(nowPathName, '/account/register') ||
            _.isEqual(nowPathName, '/home') ||
            _.isEqual(nowPathName, '/main')
        ) {
            console.debug('login do not check');
        } else {
            console.debug('login do check');
        }

        if(nextProps.baseDataState === false) {
            this.props.putGetSiteBasicData();
            console.debug(1);
        }

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
    baseDataState: state.base.site_base_data.getState
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