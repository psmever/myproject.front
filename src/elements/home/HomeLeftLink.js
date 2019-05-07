import React from "react";

export const HomeLeftLink = () => {
    return (
        <div className="col-md-3">
            <div className="profile-nav">
                <div className="widget">
                    <div className="widget-body">
                        <div className="user-heading round">
                            <a href="/resource"> <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt=""/> </a>
                            <h1>John Breakgrow</h1>
                            <p>@username</p>
                        </div>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="/resource"> <i className="fa fa-user"></i> News feed</a></li>
                            <li>
                                <a href="/resource"> <i className="fa fa-envelope"></i> Messages <span className="label label-info pull-right r-activity">9</span> </a>
                            </li>
                            <li><a href="/resource"> <i className="fa fa-calendar"></i> Events</a></li>
                            <li><a href="/resource"> <i className="fa fa-image"></i> Photos</a></li>
                            <li><a href="/resource"> <i className="fa fa-share"></i> Browse</a></li>
                            <li><a href="/resource"> <i className="fa fa-floppy-o"></i> Saved</a></li>
                        </ul>
                    </div>
                </div>

                <div className="widget">
                    <div className="widget-body">
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="/resource"> <i className="fa fa-globe"></i> Pages</a></li>
                            <li><a href="/resource"> <i className="fa fa-gamepad"></i> Games</a></li>
                            <li><a href="/resource"> <i className="fa fa-puzzle-piece"></i> Ads</a></li>
                            <li><a href="/resource"> <i className="fa fa-home"></i> Markerplace</a></li>
                            <li><a href="/resource"> <i className="fa fa-users"></i> Groups</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
