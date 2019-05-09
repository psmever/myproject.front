import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer } from 'elements';
import { FriendsRoot } from './friends/FriendsRoot';


import {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
    putGetProfileTopInfo,
    putCheckLoginInfo,
} from 'store/Actions'

export class ProfileFriendComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }


    componentDidMount() {
        this.props.putCheckLoginInfo();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user_uid !== this.props.user_uid) {
            this._getProfileTopInfo(nextProps.user_uid);
        }
    }

    _getProfileTopInfo = async (user_uid) => {
        this.props.putGetProfileTopInfo(user_uid);
    }

    render() {
        return (
            <div>
                <MainNav
                    LOGIN_STATE={this.props.login.login_state}
                />

                {/* <!-- Begin page content --> */}
                <FriendsRoot />
                {/* <!-- End page content --> */}

                <Footer />
            </div>

        );
    }
};


const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    login: state.base.login,
    profileTopData: state.profile.profile_top_info.data,
    timeline_first_idx: state.profile.timeline_list.data.first_idx,
    timeline_list: state.profile.timeline_list.data.list,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTimeList,
    putGetProfileTopInfo,
    putCheckLoginInfo
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileFriendComponent));