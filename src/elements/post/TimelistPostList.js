import React, { Component } from "react";
import * as Helper from 'lib/Helper';

export class TimelistPostList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleCommentKeyPress = (e) => {
        if (e.nativeEvent.key === "Enter") {
            this.props.COMMENT_PUSH({
                post_uuid: e.target.getAttribute('post_uuid'),
                comment_contents: e.target.value
            });
        }
    }

    handleOnClickLikeButton = (e) => {
        this.props.LIKEBUTTON_CLICK({
            post_uuid: e.target.getAttribute('post_uuid')
        });
    }

    render() {
        const user_image_url = Helper.getUserImageURL();

        const handleCommentKeyPress = this.handleCommentKeyPress;

        return (
            <div>
                {
                    this.props.TimelineList.map((item) => {
                        return (
                            <div className="box box-widget" key={item.idx}>
                                <div className="box-header with-border">
                                    <div className="user-block">
                                        <img className="img-circle" src={item.profile_image_url} alt=""/>
                                        <span className="username"><a href="#profile">{item.user_name}.</a></span>
                                        <span className="description">Shared publicly - {item.regist_date_string}</span>
                                    </div>
                                </div>

                                <div className="box-body"
                                    style={{display: 'block'}}>
                                    <img className="img-responsive show-in-modal timeline-post-img-center" src={item.upload_file_url} alt=""/>
                                    {
                                        item.timeline_content.split(/\r\n|\r|\n/).map((item, key) => {
                                            return (
                                                <p key={key}>{item}</p>
                                            )
                                        })
                                    }
                                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share </button>
                                    <button type="button" className="btn btn-default btn-xs" post_uuid={item.post_uuid} onClick={this.handleOnClickLikeButton}><i className="fa fa-thumbs-o-up"></i> Like </button>
                                    <span className="pull-right text-muted">{item.post_like_count} likes - {item.post_comment_count} comments</span>
                                </div>

                                <div className="box-footer box-comments" style={{display: 'block'}}>
                                {
                                    Helper.isEmpty(item.comment_list) === false ?
                                    (
                                        item.comment_list.map((commentItem) => {
                                            return (
                                                <div className="box-comment" key={commentItem.idx}>
                                                    <img className="img-circle img-sm" src={commentItem.user_image_url} alt=""/>
                                                    <div className="comment-text">
                                                        <span className="username"> {commentItem.user_name} <span className="text-muted pull-right">{commentItem.regist_date_string}</span> </span>
                                                        {commentItem.comment_content}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        <div className="box-comment">
                                            댓글을 달아 주세요.
                                        </div>
                                    )
                                }
                                </div>

                                <div className="box-footer" style={{display: 'block'}}>
                                    <img className="img-responsive img-circle img-sm" src={user_image_url} alt="Alt Text"/>
                                    <div className="img-push">
                                        <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"
                                            post_uuid={item.post_uuid}
                                            onKeyPress = {handleCommentKeyPress}
                                        />
                                    </div>
                                </div>
                            </div>
                        );

                    })
                }
            </div>
        );
    }
};

export default TimelistPostList;