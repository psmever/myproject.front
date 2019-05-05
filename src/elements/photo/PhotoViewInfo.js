import React from "react";

export const PhotoViewInfo = () => {
    return (
        <div>
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
        </div>
    );
};