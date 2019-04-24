import React from "react";


export const TimelinePostWrite = () => {
    return (
        <div className="box profile-info n-border-top">
            <form>
                <textarea className="form-control input-lg p-text-area" rows="5" placeholder="Whats in your mind today?"></textarea>
            </form>
            <div className="box-footer box-form">
                <button type="button" className="btn btn-azure pull-right">Post </button>
                <ul className="nav nav-pills">
                    <li><a href="#profile"><i className="fa fa-camera"></i></a></li>
                </ul>
            </div>
        </div>
    );
};






