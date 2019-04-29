import React from "react";
import * as Helper from 'lib/Helper';

export const TimelineTodayPostWrite = ({
    handleSelectImageInfo,
    handleOnChangeContents,
    handleClickPostButton,
    handleOnChangeTodayImageButton
}) => {
    return (
        <div className="box profile-info n-border-top">
            <form>
                <textarea className="form-control input-lg p-text-area" rows="5" placeholder="Whats in your mind today?"
                    onChange = {handleOnChangeContents}
                ></textarea>
            </form>
            <div className="box-footer box-form">
                <button type="button" className="btn btn-azure pull-right"
                    onClick={handleClickPostButton}
                >Post </button>
                {
                    Helper.isEmpty(handleSelectImageInfo.image_url) === false ?
                    (
                        <ul className="nav nav-pills">
                            <li>
                                <div className="box-body" style={{display: 'block'}}>
                                    <img className="img-responsive timeline-post-img-center" src={handleSelectImageInfo.image_url} alt=""/>
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

                <ul className="nav nav-pills">
                    <li>
                        <span className="file-input btn btn-azure btn-file">
                            사진 선택 <input type="file" name="select_image" onChange={handleOnChangeTodayImageButton} />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};






