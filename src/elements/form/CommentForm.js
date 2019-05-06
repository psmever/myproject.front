import React from "react";
import * as Helper from 'lib/Helper';

export const CommentForm = ({
    COMMENT_KEY_PRESS,
    COMMENT_CONTENTS,
    ON_CHENAGE_COMMENT_CONTENTS
}) => {

    const user_image_url = Helper.getUserImageURL();

    return (
        <div>
            <img className="img-responsive img-circle img-sm" src={user_image_url} alt="Alt Text"/>
            <div className="img-push">
                <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"
                    onKeyPress={COMMENT_KEY_PRESS}
                    value={COMMENT_CONTENTS}
                    onChange={ON_CHENAGE_COMMENT_CONTENTS}
                />
            </div>
        </div>
    );
};

