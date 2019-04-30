import React from "react";

export const TimelistPostList = ({
    TimelineList
}) => {
    return (
        <div>
        {
            TimelineList.map((item) => {
                return (
                    <div className="box box-widget" key={item.idx}>
                        <div className="box-header with-border">
                            <div className="user-block">
                                <img className="img-circle" src={item.profile_image_url} alt=""/>
                                <span className="username"><a href="#profile">{item.user_name}.</a></span>
                                <span className="description">Shared publicly - {item.regist_date_string}</span>
                            </div>
                        </div>

                        <div className="box-body"
                            style={{display: 'block'}}>
                            <img className="img-responsive show-in-modal timeline-post-img-center" src={item.upload_file_url} alt=""/>
                            {
                                item.timeline_content.split(/\r\n|\r|\n/).map((item, key) => {
                                    return (
                                        <p key={key}>{item}</p>
                                    )
                                })
                            }
                            <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share </button>
                            <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like </button>
                            <span className="pull-right text-muted">{item.like_count} likes - {item.share_count} comments</span>
                        </div>

                        <div className="box-footer box-comments" style={{display: 'block'}}>
                            <div className="box-comment">
                                <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040//resource/img/Friends/guy-2.jpg" alt=""/>
                                <div className="comment-text">
                                    <span className="username"> Maria Gonzales <span className="text-muted pull-right">8:03 PM Today</span> </span>
                                    It is a long established fact that a
                                    reader will be distracted
                                    by the readable content of a page when
                                    looking at its layout.
                                </div>
                            </div>

                            <div className="box-comment">
                                <img className="img-circle img-sm" src="http://psmever.dlinkddns.com:4040//resource/img/Friends/guy-3.jpg" alt=""/>
                                <div className="comment-text">
                                    <span className="username"> Luna Stark <span className="text-muted pull-right">8:03 PM Today</span> </span>
                                    It is a long established fact that a
                                    reader will be distracted
                                    by the readable content of a page when
                                    looking at its layout.
                                </div>
                            </div>
                        </div>
                        <div className="box-footer" style={{display: 'block'}}>
                            <img className="img-responsive img-circle img-sm" src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-3.jpg" alt="Alt Text"/>
                            <div className="img-push">
                                <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                            </div>
                        </div>
                    </div>
                );

            })
        }



        </div>
    );
};