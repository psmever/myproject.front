import React from "react";
import { ProfileTop } from './ProfileTop';
import { ProfileNav } from './ProfileNav';

// import { TimelinePost } from 'elements';
import { TimelineTodayPostWrite, TimelistPostList } from 'elements';

export const Timeline = ({
    handleSelectImageInfo,
    handleOnChangeTimeLineContents,
    handleClickTimeLinePostButton,
    handleOnChangeTodayImage
}) => {
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
                                    <div className="col-md-12">
                                        <div className="row">
                                            {/* <!-- left posts--> */}
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-12">

                                                        {/* <!-- post state form --> */}
                                                        <TimelineTodayPostWrite
                                                            handleSelectImageInfo={handleSelectImageInfo}
                                                            handleOnChangeContents={handleOnChangeTimeLineContents}
                                                            handleClickPostButton={handleClickTimeLinePostButton}
                                                            handleOnChangeTodayImageButton={handleOnChangeTodayImage}
                                                        />
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
                            </div>
                            {/* <!-- end timeline --> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};






