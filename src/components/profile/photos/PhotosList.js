import React, { Component } from "react";
// import * as Helper from 'lib/Helper';

/**
mix col-sm-3 page1 page4 margin30
mix col-sm-3 page2 page3 margin30
mix col-sm-3 page3 page2 margin30
mix col-sm-3 page4 margin30
mix col-sm-3 page1 margin30
mix col-sm-3 page2 margin30
mix col-sm-3 page3 margin30
mix col-sm-3 page4 margin30
*/

const photoListClassName = {
    '1': 'mix col-sm-3 page1 page4 margin30',
    '2': 'mix col-sm-3 page2 page3 margin30',
    '3': 'mix col-sm-3 page3 page2 margin30',
    '4': 'mix col-sm-3 page4 margin30',
    '5': 'mix col-sm-3 page1 margin30',
    '6': 'mix col-sm-3 page2 margin30',
    '7': 'mix col-sm-3 page3 margin30',
    '8': 'mix col-sm-3 page4 margin30',
};

export class PhotosList extends Component {

    render() {
        let imageRowCount = 0;
        return (
            <div>

                <div className="col-md-12">
                    <div id="grid" className="row">
                    {
                        this.props.PHOTOS_LIST.map((item) => {
                            imageRowCount++;
                            return (
                                <div className={photoListClassName[imageRowCount]} key={item.idx}>
                                    <div className="item-img-wrap ">
                                        <img src={item.upload_thumb_url} className="img-responsive" alt="workimg" />
                                        <div className="item-img-overlay">
                                            <a href="#photos"
                                            >
                                                <span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                    {/* <!-- grid--> */}
                </div>

            </div>
        );
    }
};

PhotosList.defaultProps = {
    PHOTOS_LIST: []
};


export default PhotosList;