import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import _ from 'lodash';

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

import { initialtryLogin, putLoginData, putGetSiteBasicData, putCheckLoginInfo } from 'store/Actions';

import * as Helper from 'lib/Helper';


const stateInitialize = {
    tryLoginCheck: false,
    pageState: false,
    loginstate: false
};

class Root extends Component {

    constructor(props) {

        super(props);

        this.state = stateInitialize;
    }

    goLoginPage = () => {
        this.props.history.push('/auth/login');
    }

    componentDidMount() {
        Helper.DEBUG({ name:'App Start'})
        this.props.putCheckLoginInfo();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.baseDataState === false) {
            this.props.putGetSiteBasicData();
        }
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
    putGetSiteBasicData,
    putCheckLoginInfo
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Root));