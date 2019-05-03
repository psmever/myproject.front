import React from "react";

const profileBackground = {
    backgroundImage: "url(http://psmever.dlinkddns.com:4040/resource/img/Cover/cover.jpg)"
};


export const ProfileTop = ({TOP_INFO}) => {

    return (
        <div className="col-md-12">
            <div className="bg-picture" style={profileBackground}>
                <span className="bg-picture-overlay"></span>
                {/* <!-- overlay --> */}
                {/* <!-- meta --> */}
                <div className="box-layout meta bottom">
                    <div className="col-md-6 clearfix">
                        <span className="img-wrapper pull-left m-r-15"><img src={TOP_INFO.user_image_url} alt="" style={{width: '110px'}} className="br-radius"/> </span>
                        <div className="media-body">
                            <h3 className="text-white mb-2 m-t-10 ellipsis">{TOP_INFO.user_name}.</h3>
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






