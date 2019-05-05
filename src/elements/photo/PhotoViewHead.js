import React from "react";

export const PhotoViewHead = () => {
    return (
        <div className="profile-nav col-md-4">
            <div className="panel">
                <div className="user-heading round">
                    <a href="#photoview"><img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt=""/></a>
                    <h1>John Breakgrow</h1>
                    <p>@gronemo</p>
                </div>

                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="profile.html"> <i className="fa fa-user"></i> Profile</a></li>
                    <li><a href="photos1.html"> <i className="fa fa-image"></i> Photos</a></li>
                </ul>
            </div>
        </div>
    );
};