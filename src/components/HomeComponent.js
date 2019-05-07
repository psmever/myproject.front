import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from 'lodash';

import { MainNav, Footer } from 'elements';
import { HomeRootComponent } from './home/HomeRootComponent';
import * as Helper from 'lib/Helper';

import {
    putGetHomeContentsList,
} from 'store/Actions'


export class HomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }

    componentWillMount() {
        // Helper.DEBUG({ name:'HomeComponent Component WILL MOUNT!', state: this.state});
    }

    componentDidMount() {
        // Helper.DEBUG({ name:'HomeComponent Component DID MOUNT!', state: this.state})
        if(_.isEmpty(this.props.home_contents_first_idx)){
            this._getHomeContentsList();
        }
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'HomeComponent Component WILL RECIEVE PROPS!', nextProps: nextProps})

        if(_.isEmpty(nextProps.home_contents_first_idx)){
            this._getHomeContentsList();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Helper.DEBUG({ name:'HomeComponent ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});
        return true;
    }

    componentWillUnmount() {
        // Helper.DEBUG({ name:'HomeComponent Component WILL UNMOUNT!' , state: this.state})

    }

    componentWillUpdate(nextProps, nextState) {
        // Helper.DEBUG({ name:'HomeComponent Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        // Helper.DEBUG({ name:'HomeComponent Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})

        // Helper.DEBUG({ name:'HomeComponent Contents List' , list: this.props.home_contents_list})
    }

    componentDidCatch(error, info) {
        // Helper.DEBUG({ name:'HomeComponent Component DID Catch!' , error: error, info: info})
        //Handle error.
    }

    _getHomeContentsList = async () => {
        this.props.putGetHomeContentsList();
    }

    render() {
        return (
            <div>
                <MainNav
                    LOGIN_STATE={this.props.login.login_state}
                />

                {/* <!-- Begin page content --> */}
                <HomeRootComponent
                    LOGIN_STATE={this.props.login.login_state}
                    LOGIN_INFO = {this.props.login_info}
                    USER_UID={this.props.user_uid}
                    HOME_CONTENTS_LIST = {this.props.home_contents_list}
                    GET_CONTENTS_LIST = {this._getHomeContentsList}
                />
                {/* <!-- End page content --> */}

                <Footer />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    login_info: state.base.login,
    login: state.base.login,
    home_contents_list: state.home.contents_list.data.list,
    home_contents_first_idx: state.home.contents_list.data.first_idx,
    site_base_data: state.base.site_base_data
});

const mapDispatchToProps = {
    putGetHomeContentsList
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent));