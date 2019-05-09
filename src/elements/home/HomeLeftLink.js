import React from "react";
import { Link } from "react-router-dom";

export const HomeLeftLink = ({
    LOGIN_STATE,
    LOGIN_USER_IMAGE,
    LOGIN_USER_NAME,
}) => {
    return (
        <div className="col-md-3">
            <div className="profile-nav">
                {
                    ( LOGIN_STATE === true ) ?
                    (
                        <div className="widget">
                            <div className="widget-body">
                            <div className="user-heading round">
                                    <Link to="/profile/timeline"> <img src={LOGIN_USER_IMAGE} alt=""/> </Link>
                                    <h1>{LOGIN_USER_NAME}.</h1>
                                    <p>@{LOGIN_USER_NAME}</p>
                                </div>
                                <ul className="nav nav-pills nav-stacked">
                                    <li className="active"><Link to="/profile/photos"><i className="fa fa-user"></i> Photos</Link></li>
                                    {/* <li className="active"><a href="/resource"> <i className="fa fa-user"></i> News feed</a></li>
                                    <li>
                                        <a href="/resource"> <i className="fa fa-envelope"></i> Messages <span className="label label-info pull-right r-activity">9</span> </a>
                                    </li>
                                    <li><a href="/resource"> <i className="fa fa-calendar"></i> Events</a></li>
                                    <li><a href="/resource"> <i className="fa fa-image"></i> Photos</a></li>
                                    <li><a href="/resource"> <i className="fa fa-share"></i> Browse</a></li>
                                    <li><a href="/resource"> <i className="fa fa-floppy-o"></i> Saved</a></li> */}
                                </ul>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="widget">
                            <div className="widget-body">
                            <div className="user-heading round">
                                    <Link to="/auth/login"> <img src={LOGIN_USER_IMAGE} alt=""/> </Link>
                                </div>
                                <ul className="nav nav-pills nav-stacked">
                                    {/* <li className="active"><Link to="/profile/photos"><i className="fa fa-user"></i> Photos</Link></li> */}
                                    {/* <li className="active"><a href="/resource"> <i className="fa fa-user"></i> News feed</a></li>
                                    <li>
                                        <a href="/resource"> <i className="fa fa-envelope"></i> Messages <span className="label label-info pull-right r-activity">9</span> </a>
                                    </li>
                                    <li><a href="/resource"> <i className="fa fa-calendar"></i> Events</a></li>
                                    <li><a href="/resource"> <i className="fa fa-image"></i> Photos</a></li>
                                    <li><a href="/resource"> <i className="fa fa-share"></i> Browse</a></li>
                                    <li><a href="/resource"> <i className="fa fa-floppy-o"></i> Saved</a></li> */}
                                </ul>
                            </div>
                        </div>
                    )
                }






                <div className="widget">
                    <div className="widget-body">
                        <ul className="nav nav-pills nav-stacked">
                            {/* <li><a href="/resource"> <i className="fa fa-globe"></i> Pages</a></li>
                            <li><a href="/resource"> <i className="fa fa-gamepad"></i> Games</a></li>
                            <li><a href="/resource"> <i className="fa fa-puzzle-piece"></i> Ads</a></li>
                            <li><a href="/resource"> <i className="fa fa-home"></i> Markerplace</a></li>
                            <li><a href="/resource"> <i className="fa fa-users"></i> Groups</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
