import React from "react";


const MainNav = () => {
    return (
        // <!-- Fixed navbar -->
        <nav className="navbar navbar-white navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href={null}><b>DayDay</b></a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="actives"><a href={null}>Profile</a></li>
                        <li><a href={null}>Home</a></li>
                        <li className="dropdown">
                            <a href={null} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Pages <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li>

                                    <div className="well with-header with-footer">
                                        <div className="clearfix">
                                            <button className="btn btn-info btn-block">로그인</button>
                                            <button className="btn btn-info btn-block">회원 가입</button>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default MainNav;