import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from 'lodash';

import { MainNav, Footer } from 'elements';
import { HomeRootComponent } from './home/HomeRootComponent';

import {
    putGetHomeContentsList,
} from 'store/Actions'
import PullRefresh from 'react-pullrefresh'

export class HomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }

    componentDidMount() {
        if(_.isEmpty(this.props.home_contents_last_idx)){
            this._getHomeContentsList();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(_.isEmpty(nextProps.home_contents_last_idx)){
            this._getHomeContentsList();
        }
    }

    _getHomeContentsList = async () => {
        this.props.putGetHomeContentsList();
    }

    onRefresh = () => {
        this.props.putGetHomeContentsList();
    }

    render() {
        return (
            <div>
                <MainNav
                    LOGIN_STATE={this.props.login.login_state}
                />
                    <PullRefresh onRefresh={this.onRefresh}>
                        {/* <!-- Begin page content --> */}
                        <HomeRootComponent
                            LOGIN_STATE={this.props.login.login_state}
                            LOGIN_INFO = {this.props.login_info}
                            USER_UID={this.props.user_uid}
                            HOME_CONTENTS_LIST = {this.props.home_contents_list}
                            GET_CONTENTS_LIST = {this._getHomeContentsList}
                        />
                        {/* <!-- End page content --> */}
                    </PullRefresh>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    login_info: state.base.login,
    login: state.base.login,
    home_contents_list: state.home.contents_list.list,
    home_contents_last_idx: state.home.contents_list.last_idx,
    site_base_data: state.base.site_base_data
});

const mapDispatchToProps = {
    putGetHomeContentsList
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent));