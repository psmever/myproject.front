import React from "react";
import { Link } from "react-router-dom";

export const PhotoViewHead = ({
    PHOTO_USER_NAME,
    PHOTO_USER_IMAGE_URL,
    PHOTO_USER_UID,
}) => {
    return (
        <div className="profile-nav col-md-4">
            <div className="panel">
                <div className="user-heading round">
                    <Link to={{
                            pathname: "/profile/timeline/"+PHOTO_USER_UID,
                            post_uuid: PHOTO_USER_UID
                        }}><img src={PHOTO_USER_IMAGE_URL} alt=""/></Link>
                    <h1>{PHOTO_USER_NAME}</h1>
                    <p>@{PHOTO_USER_NAME}</p>
                </div>

                <ul className="nav nav-pills nav-stacked">
                    <li className="active">
                        <Link to={{
                            pathname: "/profile/timeline/"+PHOTO_USER_UID,
                            post_uuid: PHOTO_USER_UID
                        }}><i className="fa fa-user"></i> Profile</Link>
                    </li>
                    <li className="active">
                        <Link to={{
                            pathname: "/profile/photos/"+PHOTO_USER_UID,
                            post_uuid: PHOTO_USER_UID
                        }}><i className="fa fa-image"></i> Photos</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};