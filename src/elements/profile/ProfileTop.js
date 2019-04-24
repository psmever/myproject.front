import React from "react";


const profileBackground = {
    backgroundImage: "url(http://localhost:4040/resource/img/Cover/cover.jpg)"
};


export const ProfileTop = () => {
    return (
        <div className="col-md-12">
            <div className="bg-picture" style={profileBackground}>
                <span className="bg-picture-overlay"></span>
                {/* <!-- overlay --> */}
                {/* <!-- meta --> */}
                <div className="box-layout meta bottom">
                    <div className="col-md-6 clearfix">
                        <span className="img-wrapper pull-left m-r-15"><img src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" style={{width: '64px'}} className="br-radius"/> </span>
                        <div className="media-body">
                            <h3 className="text-white mb-2 m-t-10 ellipsis">John Breakgrow jr.</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="pull-right">
                            <div className="dropdown">
                                <a data-toggle="dropdown" className="dropdown-toggle btn btn-azure" href="#profile" aria-expanded="false"> Following <span className="caret"></span></a>
                                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                    <li><a href="#profile">Poke</a></li>
                                    <li><a href="#profile">Private message</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#profile">Unfollow</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ meta --> */}
            </div>
        </div>
    );
};






