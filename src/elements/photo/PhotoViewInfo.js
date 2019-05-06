import React from "react";

export const PhotoViewInfo = ({
    PHOTO_USER_IMAGE_URL,
    PHOTO_USER_NAME,
    PHOTO_REGIST_DATE_STRING,
    PHOTO_POST_IMAGE_URL,
    PHOTO_POST_CONTENTS,
    PHOTO_LIKE_COUNT,
    PHOTO_COMMENT_COUNT,
}) => {
    return (
        <div>
            <div className="box-header with-border">
                <div className="user-block">
                    <img className="img-circle" src={PHOTO_USER_IMAGE_URL} alt="User_Image"/>
                    <span className="username"><a href="#photo_view">{PHOTO_USER_NAME}.</a></span>
                    <span className="description">Shared publicly - {PHOTO_REGIST_DATE_STRING}</span>
                </div>
            </div>

            <div className="box-body" style={{display: "block"}}>
                <img className="img-responsive pad show-in-modal" src={PHOTO_POST_IMAGE_URL} alt=""/>
                <p>{PHOTO_POST_CONTENTS}</p>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                <span className="pull-right text-muted">{PHOTO_LIKE_COUNT} likes - {PHOTO_COMMENT_COUNT} comments</span>
            </div>
        </div>
    );
};