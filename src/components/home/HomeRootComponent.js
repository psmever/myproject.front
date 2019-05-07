import React, { Component } from "react";
import { HomeLeftLink, HomeRightPeople, HomeRightFriends, DefaultPostList, TodayWriteForm } from 'elements';
import * as Helper from 'lib/Helper';
import * as API from 'lib/API';

const initialState = {
    commentState: {},
    today_contents: '',
    selectImageInfo: {
        image_upload_idx: '',
        image_url: ''
    }
};

export class HomeRootComponent extends Component {

    constructor(props) {

        super(props);

        this.state = initialState
    }

    _handleCommentKeyPress = async (e) => {

        const comment_contents = e.target.value;
        const post_uuid = e.target.getAttribute('post_uuid');

        if (e.nativeEvent.key === "Enter") {
            if(Helper.isEmpty(comment_contents) === false && Helper.isEmpty(post_uuid) === false) {

                const saveCommentDataResult = await API.postUserProfileTimeLineTodayCommentSave({
                    post_uuid: post_uuid,
                    comment_contents: comment_contents
                });

                if(saveCommentDataResult.status === false) {
                    Helper.globalAlert({text: saveCommentDataResult.message})
                } else {

                    this.props.GET_CONTENTS_LIST();
                    this.setState(initialState);
                }
            }
        }
    }

    _handleOnClickLikeButton = async (e) => {
        const saveCommentLikeResult = await API.postUserProfileTimeLineLikeButtonClick({
            like_command: 'add',
            post_uuid: e.target.getAttribute('post_uuid')
        });

        if(saveCommentLikeResult.status === false) {
            Helper.globalAlert({text: saveCommentLikeResult.message})
        } else {
            this.props.GET_CONTENTS_LIST();
        }

    }

    _handleOnChangeComment = (e) => {
        const { name, value} = e.target
        this.setState(prevState => {
            prevState = JSON.parse(JSON.stringify(this.state.commentState));
            prevState[name] = value;
            return {
                commentState: prevState
            };
        });
    }

    _handleOnChangeTimeLineContents = (e) => {
        this.setState({
            today_contents: e.target.value
        });
    }

    _handleOnChangeTodayImage = async (e) => {
        const todayImageFile = e.target.files[0];
        if(Helper.isEmpty(todayImageFile.name) === false && Helper.isEmpty(todayImageFile.size) === false && Helper.isEmpty(todayImageFile.type) === false) {

            let imageFormData = new FormData();
            imageFormData.append('user_uid', this.props.USER_UID);
            imageFormData.append('today_image', todayImageFile);

            const saveDataResult = await API.postUserProfileTimeLineTodayPhotoSave(imageFormData);

            if(saveDataResult['status'] === false) {
                Helper.globalAlert({text: saveDataResult.message})
            } else {
                this.setState({
                    selectImageInfo: saveDataResult.data
                });
            }
        }
    }

    _handleClickTimeLinePostButton = async (e) => {
        e.preventDefault();
        const todayContentsData = {
            user_uid: this.props.USER_UID,
            today_contents: this.state.today_contents,
            image_upload_idx: this.state.selectImageInfo.image_upload_idx
        }
        const saveTodayDataResult = await API.postUserProfileTimeLineTodaySave(todayContentsData);
        if(saveTodayDataResult.status === false) {
            Helper.globalAlert({text: saveTodayDataResult.message})
        } else {
            this.props.GET_CONTENTS_LIST();

            this.setState(initialState);
        }
    }

    render() {

        const user_image_url = Helper.getUserImageURL();

        return (
            <div className="container page-content ">
                <div className="row">
                    {/* <!-- left links --> */}
                    {
                        this.props.LOGIN_STATE ?
                        (
                            <HomeLeftLink
                                LOGIN_STATE = {this.props.LOGIN_INFO.login_state}
                                LOGIN_USER_IMAGE = {this.props.LOGIN_INFO.user_image_url}
                                LOGIN_USER_NAME = {this.props.LOGIN_INFO.user_name}
                            />
                        ) : (
                            null
                        )
                    }

                    {/* <!-- end left links --> */}


                    {/* <!-- center posts --> */}
                    <div className="col-md-6">
                        <div className="row">
                            {/* <!-- left posts--> */}
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <!-- post state form --> */}
                                        {
                                            this.props.LOGIN_STATE ?
                                            (
                                                <TodayWriteForm
                                                    ONCHANGE_CONTENTS = {this._handleOnChangeTimeLineContents}
                                                    ONCHANGE_SELECT_IMAGE = {this._handleOnChangeTodayImage}
                                                    CONTENTS_VALUE = {this.state.today_contents}
                                                    ONCLICK_POST_BUTTON = {this._handleClickTimeLinePostButton}
                                                    SELECT_IMAGE_URL = {this.state.selectImageInfo.image_url}
                                                />
                                            ) : (
                                                null
                                            )
                                        }
                                        {/* <!-- end post state form --> */}

                                        <DefaultPostList
                                            LOGIN_STATE = {this.props.LOGIN_INFO.login_state}
                                            USER_LOGIN_IMAGE_URL = {user_image_url}
                                            POST_LIST = {this.props.HOME_CONTENTS_LIST}
                                            HANDLE_COMMENT_KEYPRESS = {this._handleCommentKeyPress}
                                            HANDLE_ONCLICK_LIKEBUTTON = {this._handleOnClickLikeButton}
                                            HANDLE_ONCHANGE_COMMENT = {this._handleOnChangeComment}
                                            COMMENT_CONTENTS = {this.state.commentState}
                                        />

                                        {/* <!--  end posts --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end left posts--> */}
                        </div>
                    </div>
                    {/* <!-- end  center posts --> */}

                    {/* <!-- right posts --> */}
                    <div className="col-md-3">
                        {/* <!-- Friends activity --> */}
                        <HomeRightFriends/>
                        {/* <!-- End Friends activity --> */}

                        {/* <!-- People You May Know --> */}
                        <HomeRightPeople/>
                        {/* <!-- End people yout may know --> */}
                    </div>
                    {/* <!-- end right posts --> */}
                </div>
            </div>
        );
    }
};

export default HomeRootComponent;