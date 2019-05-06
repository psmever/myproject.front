import React, { Component } from "react";
// import { PhotosView } from './PhotosView';
import _ from 'lodash';
import * as Helper from 'lib/Helper';
import * as API from 'lib/API';
import {
    DefaultComment,
    CommentForm,
    PhotoViewInfo,
    PhotoViewHead
} from 'elements';

const initialState = {
    commentState: ''
};

export class PhotoViewRoot extends Component {

    constructor(props) {

        super(props);

        this.state = initialState
    }

    handleCommentKeyPress = async (e) => {
        const comment_contents = e.target.value;
        const post_uuid = this.props.POST_UUID;

        if (e.nativeEvent.key === "Enter") {
            if(_.isEmpty(comment_contents) === false && _.isEmpty(post_uuid) === false) {

                const saveCommentDataResult = await API.postUserProfileTimeLineTodayCommentSave({
                    post_uuid: post_uuid,
                    comment_contents: comment_contents
                });

                if(saveCommentDataResult.status === false) {
                    Helper.globalAlert({text: saveCommentDataResult.message})
                } else {
                    this.props.GET_PHOTO_VIEW_INFO(post_uuid);
                    this.setState(initialState);
                }
            }
        }
    }

    _handleOnChangeComment = (e) => {
        const { value } = e.target
        this.setState({
            commentState: value
        });
    }

    _handleClickLikeButton = async (e) => {
        const saveCommentLikeResult = await API.postUserProfileTimeLineLikeButtonClick({
            like_command: 'add',
            post_uuid: this.props.POST_UUID
        });

        if(saveCommentLikeResult.status === false) {
            Helper.globalAlert({text: saveCommentLikeResult.message})
        } else {
            // this.props.GET_TIME_LINE_LIST();
            this.props.GET_PHOTO_VIEW_INFO(this.props.POST_UUID);
        }
    }

    render() {
        return (

            // <!-- Begin page content -->
            <div className="container page-content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">

                                <PhotoViewHead
                                    PHOTO_USER_NAME={this.props.USER_INFO.user_name}
                                    PHOTO_USER_IMAGE_URL={this.props.USER_INFO.user_image_url}
                                    PHOTO_USER_UID={this.props.USER_INFO.user_uid}
                                ></PhotoViewHead>

                            <div className="profile-info col-md-8">
                                {/* <!--   posts --> */}
                                <div className="box box-widget">

                                        <PhotoViewInfo
                                            PHOTO_USER_UID = {this.props.USER_INFO.user_uid}
                                            PHOTO_USER_IMAGE_URL = {this.props.PHOTO_INFO.user_image_url}
                                            PHOTO_USER_NAME = {this.props.PHOTO_INFO.user_name}
                                            PHOTO_REGIST_DATE_STRING = {this.props.PHOTO_INFO.regist_date_string}
                                            PHOTO_POST_IMAGE_URL = {this.props.PHOTO_INFO.upload_file_url}
                                            PHOTO_POST_CONTENTS = {this.props.PHOTO_INFO.timeline_content}
                                            PHOTO_LIKE_COUNT = {this.props.PHOTO_INFO.like_count}
                                            PHOTO_COMMENT_COUNT = {this.props.PHOTO_INFO.post_like_count}
                                            CLICK_LIKE_BUTTON = {this._handleClickLikeButton}
                                        >
                                        </PhotoViewInfo>

                                        <DefaultComment
                                            COMMENT_LIST={this.props.COMMENT_LIST}
                                        ></DefaultComment>

                                    <div className="box-footer" style={{display: "block"}}>

                                        <CommentForm
                                            COMMENT_KEY_PRESS={this.handleCommentKeyPress}
                                            COMMENT_CONTENTS = {this.state.commentState}
                                            ON_CHENAGE_COMMENT_CONTENTS = {this._handleOnChangeComment}
                                        ></CommentForm>

                                    </div>
                                </div>
                                {/* <!--  end posts --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default PhotoViewRoot;