import React from "react";
import { TimelinePostWrite, TimelistPostList } from 'elements';

export const TimelinePost = () => {
    return (
        <div>
            {/* <!--============= timeline posts--> */}
            <div className="col-md-12">
                <div className="row">
                    {/* <!-- left posts--> */}
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">

                                {/* <!-- post state form --> */}
                                <TimelinePostWrite />
                                {/* <!-- end post state form --> */}

                                {/* <!--  Begin posts --> */}
                                <TimelistPostList />
                                {/* <!--  end posts --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!-- end left posts--> */}
                </div>
            </div>
            {/* <!-- end timeline posts--> */}
        </div>
    );
};






