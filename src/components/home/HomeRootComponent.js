import React, { Component } from "react";

export class HomeRootComponent extends Component {

    render() {
        return (
            <div className="container page-content ">
                <div className="row">
                    {/* <!-- left links --> */}
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
                    {/* <!-- end left links --> */}


                    {/* <!-- center posts --> */}
                    <div className="col-md-6">
                        <div className="row">
                            {/* <!-- left posts--> */}
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <!-- post state form --> */}
                                        <div className="box profile-info n-border-top">
                                            <form>
                                                <textarea className="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?"></textarea>
                                            </form>
                                            <div className="box-footer box-form">
                                                <button type="button" className="btn btn-azure pull-right">Post</button>
                                                <ul className="nav nav-pills">
                                                    <li><a href="/resource"><i className="fa fa-map-marker"></i></a></li>
                                                    <li><a href="/resource"><i className="fa fa-camera"></i></a></li>
                                                    <li><a href="/resource"><i className=" fa fa-film"></i></a></li>
                                                    <li><a href="/resource"><i className="fa fa-microphone"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end post state form --> */}

                                        {/* <!--   posts --> */}
                                        <div className="box box-widget">
                                            <div className="box-header with-border">
                                                <div className="user-block">
                                                    <img className="img-circle" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
                                                    <span className="username"><a href="/resource">John Breakgrow jr.</a></span>
                                                    <span className="description">Shared publicly - 7:30 PM Today</span>
                                                </div>
                                            </div>

                                            <div className="box-body" style={{display: 'block'}}>
                                                <img className="img-responsive show-in-modal" src="http://psmever.dlinkddns.com:4040/resource/img/Post/young-couple-in-love.jpg" alt=""/>
                                                <p>I took this photo this morning. What do you guys think?</p>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                <span className="pull-right text-muted">127 likes - 3 comments</span>
                                            </div>
                                            <div className="box-footer box-comments" style={{display: 'block'}}>
                                                <div className="box-comment">
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-2.jpg" alt="User_Image"/>
                                                    <div className="comment-text">
                                                        <span className="username">
                                                            Maria Gonzales <span className="text-muted pull-right">8:03 PM Today</span>
                                                        </span>
                                                        It is a long established fact that a reader will be distracted
                                                        by the readable content of a page when looking at its layout.
                                                    </div>
                                                </div>

                                                <div className="box-comment">
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
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
                                            <div className="box-footer" style={{display: 'block'}}>
                                                <form action="#" method="post">
                                                    <img className="img-responsive img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="Alt_Text"/>
                                                    <div className="img-push">
                                                        <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!--  end posts--> */}


                                        {/* <!-- post --> */}
                                        <div className="box box-widget">
                                            <div className="box-header with-border">
                                                <div className="user-block">
                                                    <img className="img-circle" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
                                                    <span className="username"><a href="/resource">Jonathan Burke Jr.</a></span>
                                                    <span className="description">Shared publicly - 7:30 PM Today</span>
                                                </div>
                                                <div className="box-tools">
                                                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="" data-original-title="Mark as read"> <i className="fa fa-circle-o"></i></button>
                                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <p>Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts. Separated they live in Bookmarksgrove right at</p>

                                                <p>the coast of the Semantics, a large language ocean.
                                                A small river named Duden flows by their place and supplies
                                                it with the necessary regelialia. It is a paradisematic
                                                country, in which roasted parts of sentences fly into
                                                your mouth.</p>

                                                <div className="attachment-block clearfix">
                                                    <img className="attachment-img" src="http://psmever.dlinkddns.com:4040/resource/img/Photos/2.jpg" alt="Attachment_Image"/>
                                                    <div className="attachment-pushed">
                                                        <h4 className="attachment-heading"><a href="/resource/http://www.bootdey.com/">Lorem ipsum text generator</a></h4>
                                                        <div className="attachment-text">
                                                            Description about the attachment can be placed here.
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="/resource">more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                <span className="pull-right text-muted">45 likes - 2 comments</span>
                                            </div>
                                            <div className="box-footer box-comments">
                                                <div className="box-comment">
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-5.jpg" alt="User_Image"/>
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
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-6.jpg" alt="User_Image"/>
                                                    <div className="comment-text">
                                                        <span className="username">
                                                            Nora Havisham
                                                            <span className="text-muted pull-right">8:03 PM Today</span>
                                                        </span>
                                                        The point of using Lorem Ipsum is that it has a more-or-less
                                                        normal distribution of letters, as opposed to using
                                                        'Content here, content here', making it look like readable English.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-footer">
                                                <form action="#" method="post">
                                                    <img className="img-responsive img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text"/>
                                                    <div className="img-push">
                                                        <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- end post --> */}

                                        {/* <!--  posts --> */}
                                        <div className="box box-widget">
                                            <div className="box-header with-border">
                                                <div className="user-block">
                                                    <img className="img-circle" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
                                                    <span className="username"><a href="/resource">John Breakgrow jr.</a></span>
                                                    <span className="description">Shared publicly - 7:30 PM Today</span>
                                                </div>
                                            </div>

                                            <div className="box-body" style={{display: 'block'}}>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac iaculis ligula, eget efficitur nisi. In vel rutrum orci. Etiam ut orci volutpat, maximus quam vel, euismod orci. Nunc in urna non lectus malesuada aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam dignissim mi ac metus consequat, a pharetra neque molestie. Maecenas condimentum lorem quis vulputate volutpat. Etiam sapien diam
                                                </p>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                <span className="pull-right text-muted">127 likes - 3 comments</span>
                                            </div>
                                            <div className="box-footer box-comments" style={{display: 'block'}}>
                                                <div className="box-comment">
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-2.jpg" alt="User_Image"/>
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
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
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
                                            <div className="box-footer" style={{display: 'block'}}>
                                                <form action="#" method="post">
                                                    <img className="img-responsive img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text"/>
                                                    <div className="img-push">
                                                        <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!--  end posts --> */}

                                        {/* <!--   posts --> */}
                                        <div className="box box-widget">
                                            <div className="box-header with-border">
                                                <div className="user-block">
                                                    <img className="img-circle" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
                                                    <span className="username"><a href="/resource">John Breakgrow jr.</a></span>
                                                    <span className="description">Shared publicly - 7:30 PM Today</span>
                                                </div>
                                            </div>

                                            <div className="box-body" style={{display: 'block'}}>
                                                <img className="img-responsive pad" src="http://psmever.dlinkddns.com:4040/resource/img/Photos/3.jpg" alt="_Photo"/>
                                                <p>I took this photo this morning. What do you guys think?</p>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                <span className="pull-right text-muted">127 likes - 3 comments</span>
                                            </div>
                                            <div className="box-footer box-comments" style={{display: 'block'}}>
                                                <div className="box-comment">
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-2.jpg" alt="User_Image"/>
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
                                                    <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="User_Image"/>
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
                                                <div className="box-footer" style={{display: 'block'}}>
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
                            {/* <!-- end left posts--> */}
                        </div>
                    </div>
                    {/* <!-- end  center posts --> */}

                    {/* <!-- right posts --> */}
                    <div className="col-md-3">
                        {/* <!-- Friends activity --> */}
                        <div className="widget">
                            <div className="widget-header">
                                <h3 className="widget-caption">Friends activity</h3>
                            </div>
                            <div className="widget-body bordered-top bordered-sky">
                                <div className="card">
                                    <div className="content">
                                        <ul className="list-unstyled team-members">
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-2.jpg" alt="img" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-9">
                                                        <b><a href="/resource">Hillary Markston</a></b> shared a
                                                        <b><a href="/resource">publication</a></b>.
                                                        <span className="timeago" >5 min ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-3.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-9">
                                                        <b><a href="/resource">Leidy marshel</a></b> shared a
                                                        <b><a href="/resource">publication</a></b>.
                                                        <span className="timeago" >5 min ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-4.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-9">
                                                        <b><a href="/resource">Presilla bo</a></b> shared a
                                                        <b><a href="/resource">publication</a></b>.
                                                        <span className="timeago" >5 min ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-4.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-9">
                                                        <b><a href="/resource">Martha markguy</a></b> shared a
                                                        <b><a href="/resource">publication</a></b>.
                                                        <span className="timeago" >5 min ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Friends activity --> */}

                        {/* <!-- People You May Know --> */}
                        <div className="widget">
                            <div className="widget-header">
                                <h3 className="widget-caption">People You May Know</h3>
                            </div>
                            <div className="widget-body bordered-top bordered-sky">
                                <div className="card">
                                    <div className="content">
                                        <ul className="list-unstyled team-members">
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-2.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        Carlos marthur
                                                    </div>

                                                    <div className="col-xs-3 text-right">
                                                        <button className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-1.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        Maria gustami
                                                    </div>

                                                    <div className="col-xs-3 text-right">
                                                        <button className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <div className="avatar">
                                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-2.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        Angellina mcblown
                                                    </div>

                                                    <div className="col-xs-3 text-right">
                                                        <button className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End people yout may know --> */}
                    </div>
                    {/* <!-- end right posts --> */}
                </div>
            </div>
        );
    }
};

export default HomeRootComponent;