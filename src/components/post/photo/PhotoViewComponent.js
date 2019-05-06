import React, { Component } from "react";
import _ from 'lodash';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MainNav, Footer } from 'elements';
import { PhotoViewRoot } from './sub/PhotoViewRoot';

import * as Helper from 'lib/Helper';
import * as API from 'lib/API';

export class PhotoViewComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post_uuid: null,
            photo_view_info: {
                user_info: [],
                photo_info: [],
                comment_list: []
            }
        }
    }

    componentWillMount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL MOUNT!', state: this.state})
        if( !_.isEqual(this.props.match.params.post_uuid, this.state.post_uuid) ) {
            this._setPostUUid(this.props.match.params.post_uuid);
        }
        Helper.DEBUG({
            now: this.state.post_uuid,
        });
    }

    componentDidMount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component DID MOUNT!', state: this.state})

        console.debug({ state: this.state });
        console.debug({ props_post_uuid: _.isEmpty(this.props.post_uuid) });
        console.debug({ state_post_uuid: _.isEmpty(this.state.post_uuid) });

        this._getPhotoViewInfo(this.state.post_uuid);
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL RECIEVE PROPS!', nextProps: nextProps, state: this.state})

        // Helper.DEBUG({ next: nextProps.match.params.post_uuid, this: this.props.match.params.post_uuid });

     }

    shouldComponentUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'PhotoViewComponent ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});
        return true;
    }

    componentWillUnmount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL UNMOUNT!' , state: this.state})
    }


    componentWillUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        Helper.DEBUG({ name:'PhotoViewComponent Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }

    _setPostUUid = (new_post_uuid) => {

        this.setState({
            post_uuid: new_post_uuid
        });
    }


    _getPhotoViewInfo = async (post_uuid) => {
        const getResult = await API.getPhotoViewInfo(post_uuid);

        if(getResult.status === false) {
            Helper.globalErroraAlert({
                title: '에러',
                text: getResult.message
            })
        } else {
            this.setState({
                photo_view_info: getResult.data
            });
        }
    }


    render() {
        return (
            <div>
                <MainNav />

                <PhotoViewRoot
                    POST_UUID = {this.state.post_uuid}
                    USER_INFO = {this.state.photo_view_info.user_info}
                    PHOTO_INFO = {this.state.photo_view_info.photo_info}
                    COMMENT_LIST = {this.state.photo_view_info.comment_list}
                    GET_PHOTO_VIEW_INFO = {this._getPhotoViewInfo}

                    >
                </PhotoViewRoot>

                <Footer />

            </div>

        );
    }
};


const mapStateToProps = state => ({
    user_uid: state.base.login.user_uid,
});

const mapDispatchToProps = {

};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoViewComponent));