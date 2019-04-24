import React from "react";
import { ProfileTop } from './ProfileTop';
import { ProfileNav } from './ProfileNav';

import { ProfilePhotos } from 'elements';

export const Photos = () => {
    return (
        <div className="container page-content">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="row">

                        <ProfileTop />

                    </div>
                    <div className="row">

                        {/* <!-- Nav tabs --> */}
                        <ProfileNav />

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">

                            {/* <!-- Timeline --> */}
                            <div role="tabpanel" className="tab-pane active" id="timeline">
                                <div className="row">

                                    {/* <!--============= timeline posts--> */}
                                    <ProfilePhotos />
                                    {/* <!-- end timeline posts--> */}

                                </div>
                            </div>
                            {/* <!-- end timeline --> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};






