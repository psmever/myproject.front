import React from "react";


export const DefaultComment = () => {


    return (
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
    );
};
