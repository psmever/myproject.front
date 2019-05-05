import React, { Component } from "react";
// import { PhotosView } from './PhotosView';

export class PhotosViewRoot extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }
    }

    render() {

        return (

            // <!-- Begin page content -->
            <div className="container page-content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">
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
                            <div className="profile-info col-md-8">
                                {/* <!--   posts --> */}
                                <div className="box box-widget">
                                    <div className="box-header with-border">
                                        <div className="user-block">
                                            <img className="img-circle" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
                                            <span className="username"><a href="#photo_view">John Breakgrow jr.</a></span>
                                            <span className="description">Shared publicly - 7:30 PM Today</span>
                                        </div>
                                    </div>

                                    <div className="box-body" style={{display: "block"}}>
                                        <img className="img-responsive pad show-in-modal" src="http://psmever.dlinkddns.com:4040/resource/img/Photos/3.jpg" alt=""/>
                                        <p>I took this photo this morning. What do you guys think?</p>
                                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                        <span className="pull-right text-muted">127 likes - 3 comments</span>
                                    </div>
                                    <div className="box-footer box-comments" style={{display: "block"}}>
                                        <div className="box-comment">
                                            <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-2.jpg" alt=""/>
                                            <div className="comment-text">
                                                <span className="username">
                                                    Maria Gonzales
                                                    <span className="text-muted pull-right">8:03 PM Today</span>
                                                </span>
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </div>
                                        </div>

                                        <div className="box-comment">
                                            <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt=""/>
                                            <div className="comment-text">
                                                <span className="username">
                                                    Luna Stark
                                                    <span className="text-muted pull-right">8:03 PM Today</span>
                                                </span>
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer" style={{display: "block"}}>
                                        <form action="#" method="post">
                                            <img className="img-responsive img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text"/>
                                            <div className="img-push">
                                                <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <!--  end posts --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default PhotosViewRoot;