import React, { Component } from "react";
import { DefaultPostList } from 'elements';
import * as Helper from 'lib/Helper';
import * as API from 'lib/API';


const initialState = {
    commentState: {}
};


export class TimelistPostList extends Component {

    constructor(props) {
        super(props);

        this.state = initialState
    }



    handleCommentKeyPress = async (e) => {

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

                    this.props.GET_TIME_LINE_LIST();
                    this.setState(initialState);
                }
            }
        }
    }

    handleOnClickLikeButton = async (e) => {
        const saveCommentLikeResult = await API.postUserProfileTimeLineLikeButtonClick({
            like_command: 'add',
            post_uuid: e.target.getAttribute('post_uuid')
        });

        if(saveCommentLikeResult.status === false) {
            Helper.globalAlert({text: saveCommentLikeResult.message})
        } else {
            this.props.GET_TIME_LINE_LIST();
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

    render() {
        const user_image_url = Helper.getUserImageURL();

        const handleCommentKeyPress = this.handleCommentKeyPress;

        return (
            <div>
                <DefaultPostList
                    POST_LIST={this.props.TIME_LINE_LIST}
                    HANDLE_ONCHANGE_COMMENT={this._handleOnChangeComment}
                    COMMENT_CONTENTS={this.state.commentState}
                    HANDLE_COMMENT_KEYPRESS={this.handleCommentKeyPress}
                    HANDLE_ONCLICK_LIKEBUTTON={this.handleOnClickLikeButton}
                >

                </DefaultPostList>
            </div>
        );
    }
};

TimelistPostList.defaultProps = {
    TIME_LINE_LIST: []
};


export default TimelistPostList;