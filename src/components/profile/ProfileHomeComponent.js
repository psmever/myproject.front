import React, { Component } from "react";


export class ProfileHomeComponent extends Component {

    render() {
        console.debug('main');
        return (
            <div>
                {/* <!-- Fixed navbar --> */}
                <nav className="navbar navbar-white navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><b>DayDay</b></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="actives"><a href="profile.html">Profile</a></li>
                                <li><a href="home.html">Home</a></li>
                                <li className="dropdown">
                                    <a href="#profile" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Pages <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="registration_mail.html">Registration mail</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <!-- Begin page content --> */}
                <div className="container page-content">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bg-picture" style={{backgroundImage: 'url('+'http://localhost:4040/resource/img/Cover/cover.jpg'+')'}}>
                                        <span className="bg-picture-overlay"></span>
                                        {/* <!-- overlay --> */}
                                        {/* <!-- meta --> */}
                                        <div className="box-layout meta bottom">
                                            <div className="col-md-6 clearfix">
                                        <span className="img-wrapper pull-left m-r-15">
                                            <img src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" style={{width:'64px'}} className="br-radius" />
                                        </span>
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
                            </div>
                            <div className="row">
                                {/* <!-- Nav tabs --> */}
                                <div className="cover profile">
                                    <div className="cover-info">
                                        <ul className="cover-nav">
                                            <li className="active"><a href="profile.html"><i className="fa fa-fw fa-bars"></i> Timeline</a></li>
                                            <li><a href="friends.html"><i className="fa fa-fw fa-users"></i> Friends</a></li>
                                            <li><a href="photos1.html"><i className="fa fa-fw fa-image"></i> Photos</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    {/* <!-- Timeline --> */}
                                    <div role="tabpanel" className="tab-pane active" id="timeline">
                                        <div className="row">

                                            {/* <!--============= timeline posts--> */}
                                            <div className="col-md-12">
                                                <div className="row">
                                                    {/* <!-- left posts--> */}
                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                {/* <!-- post state form --> */}
                                                                <div className="box profile-info n-border-top">
                                                                    <form>
                                                                        <textarea className="form-control input-lg p-text-area" rows="5" placeholder="Whats in your mind today?"></textarea>
                                                                    </form>
                                                                    <div className="box-footer box-form">
                                                                        <button type="button" className="btn btn-azure pull-right">Post</button>
                                                                        <ul className="nav nav-pills">
                                                                            <li><a href="#profile"><i className="fa fa-camera"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- end post state form --> */}

                                                                {/* <!--   posts --> */}
                                                                <div className="box box-widget">
                                                                    <div className="box-header with-border">
                                                                        <div className="user-block">
                                                                            <img className="img-circle" src="http://localhost:4040//resource/img/Friends/guy-3.jpg" alt="" />
                                                                                <span className="username"><a href="#profile">John Breakgrow jr.</a></span>
                                                                                <span className="description">Shared publicly - 7:30 PM Today</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="box-body" style={{display: 'block'}}>
                                                                        <img className="img-responsive show-in-modal timeline-post-img-center" src="http://localhost:4040//resource/img/Post/young-couple-in-love.jpg" alt="" />
                                                                            <p>I took this photo this morning. What do you guys think?</p>
                                                                            <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                                            <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                                            <span className="pull-right text-muted">127 likes - 3 comments</span>
                                                                    </div>

                                                                    <div className="box-footer box-comments" style={{display: 'block'}}>
                                                                        <div className="box-comment">
                                                                            <img className="img-circle img-sm" src="http://localhost:4040//resource/img/Friends/guy-2.jpg" alt="" />
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
                                                                            <img className="img-circle img-sm" src="http://localhost:4040//resource/img/Friends/guy-3.jpg" alt="" />
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
                                                                            <img className="img-responsive img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text" />
                                                                                <div className="img-push">
                                                                                    <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
                                                                                </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* <!--  end posts--> */}


                                                                {/* <!-- post --> */}
                                                                <div className="box box-widget">
                                                                    <div className="box-header with-border">
                                                                        <div className="user-block">
                                                                            <img className="img-circle" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" />
                                                                                <span className="username"><a href="#profile">Jonathan Burke Jr.</a></span>
                                                                                <span className="description">Shared publicly - 7:30 PM Today</span>
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
                                                                            <img className="attachment-img show-in-modal" src="http://localhost:4040/resource/img/Photos/2.jpg" alt="" />
                                                                                <div className="attachment-pushed">
                                                                                    <h4 className="attachment-heading"><a href="http://www.bootdey.com/">Lorem ipsum text generator</a></h4>
                                                                                    <div className="attachment-text">
                                                                                        Description about the attachment can be placed here.
                                                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#profile">more</a>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                                        <span className="pull-right text-muted">45 likes - 2 comments</span>
                                                                    </div>
                                                                    <div className="box-footer box-comments">
                                                                        <div className="box-comment">
                                                                            <img className="img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-5.jpg" alt="" />
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
                                                                            <img className="img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-6.jpg" alt="" />
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
                                                                            <img className="img-responsive img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text" />
                                                                                <div className="img-push">
                                                                                    <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
                                                                                </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- end post --> */}

                                                                {/* <!--  posts --> */}
                                                                <div className="box box-widget">
                                                                    <div className="box-header with-border">
                                                                        <div className="user-block">
                                                                            <img className="img-circle" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" />
                                                                                <span className="username"><a href="#profile">John Breakgrow jr.</a></span>
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
                                                                            <img className="img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-2.jpg" alt="" />
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
                                                                            <img className="img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" />
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
                                                                            <img className="img-responsive img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text" />
                                                                                <div className="img-push">
                                                                                    <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
                                                                                </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* <!--  end posts --> */}

                                                                {/* <!--   posts --> */}
                                                                <div className="box box-widget">
                                                                    <div className="box-header with-border">
                                                                        <div className="user-block">
                                                                            <img className="img-circle " src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" />
                                                                                <span className="username"><a href="#profile">John Breakgrow jr.</a></span>
                                                                                <span className="description">Shared publicly - 7:30 PM Today</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="box-body" style={{display: 'block'}}>
                                                                        <img className="img-responsive pad show-in-modal timeline-post-img-center" src="http://localhost:4040/resource/img/Photos/3.jpg" alt="" />
                                                                            <p>I took this photo this morning. What do you guys think?</p>
                                                                            <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                                                                            <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                                                            <span className="pull-right text-muted">127 likes - 3 comments</span>
                                                                    </div>
                                                                    <div className="box-footer box-comments" style={{display: 'block'}}>
                                                                        <div className="box-comment">
                                                                            <img className="img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-2.jpg" alt="" />
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
                                                                            <img className="img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="" />
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
                                                                            <img className="img-responsive img-circle img-sm" src="http://localhost:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text" />
                                                                                <div className="img-push">
                                                                                    <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
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
                                            {/* <!-- end timeline posts--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end timeline --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container">
                        <p className="text-muted"> Copyright &copy; Company - All rights reserved </p>
                    </div>
                </footer>
            </div>
        );
    }
};

export default ProfileHomeComponent;