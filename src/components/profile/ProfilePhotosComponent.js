import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer } from 'elements';
import {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTopInfo,
    putGetProfilePhotosList
} from 'store/Actions'
import { PhotosRoot } from './photos/PhotosRoot';

// import * as Helper from 'lib/Helper';

export class ProfilePhotosComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }


    componentWillMount() {
        // Helper.DEBUG({ name:'ProfilePhotoComponent Component WILL MOUNT!', state: this.state, props: this.props})
    }

    componentDidMount() {
        // Helper.DEBUG({ name:'ProfilePhotoComponent Component DID MOUNT!', state: this.state})
    }

    componentWillReceiveProps(nextProps) {
        // Helper.DEBUG({ name:'ProfilePhotoComponent Component WILL RECIEVE PROPS!', nextProps: nextProps})

        if(nextProps.user_uid !== this.props.user_uid) {
            this._getProfileTopInfo(nextProps.user_uid);
            this._getPhotosList(nextProps.user_uid);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Helper.DEBUG({ name:'ProfilePhotoComponent ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        return true;
    }

    componentWillUnmount() {
        // Helper.DEBUG({ name:'ProfilePhotoComponent Component WILL UNMOUNT!' , state: this.state})
    }


    componentWillUpdate(nextProps, nextState) {
        // Helper.DEBUG({ name:'ProfilePhotoComponent Component WILL UPDATE!' , nextProps: nextProps, nextState: nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        // Helper.DEBUG({ name:'ProfilePhotoComponent Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }

    _getPhotosList = async (user_uid) => {
        this.props.putGetProfilePhotosList(user_uid);
    }

    _getProfileTopInfo = async (user_uid) => {
        this.props.putGetProfileTopInfo(user_uid);
    }

    render() {
        return (
            <div>
                <MainNav />

                    <PhotosRoot
                        TOP_INFO = {this.props.profileTopData}
                        USER_UID = {this.props.user_uid}
                        PHOTOS_LIST = {this.props.photos_list_list}
                        GET_PHOTOS_LIST = {this._getPhotosList}
                    />

                <Footer />
            </div>

        );
    }
};

const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
    profileTopData: state.profile.profile_top_info.data,
    photos_first_idx: state.profile.photos_list.data.first_idx,
    photos_list_list: state.profile.photos_list.data.list,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction,
    putGetProfileTopInfo,
    putGetProfilePhotosList,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePhotosComponent));