import React from "react";


export const DefaultComment = ({
    COMMENT_LIST
}) => {
    return (
        <div className="box-footer box-comments" style={{display: "block"}}>
        {
            COMMENT_LIST.map((item) => {
                return (
                    <div className="box-comment" key={item.idx}>
                        <img className="img-circle img-sm" src={item.user_image_url} alt=""/>
                        <div className="comment-text">
                            <span className="username"> {item.user_name} <span className="text-muted pull-right">{item.regist_date_string}</span> </span>
                            {item.comment_content}
                        </div>
                    </div>
                )
            })
        }
        </div>
    );
};
