import React from "react";
import { Link } from "react-router-dom";

export const SingleNav = () => {
    return (
        <nav className="navbar navbar-fixed-top navbar-transparent" role="navigation">
            <div className="container">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button id="menu-toggle" type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <Link className="navbar-brand" to="/home"><b>DayDay</b></Link>
                </div>
            </div>
        </nav>
    );
};