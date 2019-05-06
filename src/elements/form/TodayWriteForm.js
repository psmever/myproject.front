import React from "react";
import _ from 'lodash';

export const TodayWriteForm = ({
    ONCHANGE_CONTENTS,
    ONCHANGE_SELECT_IMAGE,
    CONTENTS_VALUE,
    ONCLICK_POST_BUTTON,
    SELECT_IMAGE_URL
}) => {
    return (
        <div className="box profile-info n-border-top">
            <form>
                <textarea className="form-control input-lg p-text-area" rows="5" placeholder="Whats in your mind today?"
                    onChange = {ONCHANGE_CONTENTS}
                    value = {CONTENTS_VALUE}
                ></textarea>
            </form>
            <div className="box-footer box-form">
            <ul className="nav nav-pills">
                    <li>
                        <span className="file-input btn btn-azure btn-file">
                            사진 선택 <input type="file" name="select_image" onChange={ONCHANGE_SELECT_IMAGE} />
                        </span>
                    </li>
                    <li>
                    <button type="button" className="btn btn-azure pull-right"
                        onClick={ONCLICK_POST_BUTTON}
                    >Post </button>
                    </li>
                </ul>
                {
                    _.isEmpty(SELECT_IMAGE_URL) === false ?
                    (
                        <ul className="nav nav-pills">
                            <li>
                                <div className="box-body" style={{display: 'block'}}>
                                    <img className="img-responsive timeline-post-img-center" src={SELECT_IMAGE_URL} alt=""/>
                                </div>
                            </li>
                        </ul>
                    )
                    :
                    (
                        <ul className="nav nav-pills">
                        </ul>
                    )
                }
            </div>
        </div>
    );
};