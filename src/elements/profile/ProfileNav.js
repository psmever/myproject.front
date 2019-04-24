import React from "react";
import { Link } from "react-router-dom";

export const ProfileNav = () => {
    return (
        <div className="cover profile">
            <div className="cover-info">
                <ul className="cover-nav">
                    <li className="active"><Link to="/profile/timeline"><i className="fa fa-fw fa-bars"></i> Timeline</Link></li>
                    <li><Link to="/profile/friends"><i className="fa fa-fw fa-users"></i> Friends</Link> </li>
                    <li><Link to="/profile/photos"><i className="fa fa-fw fa-image"></i> Photos</Link> </li>
                </ul>
            </div>
        </div>
    );
};






