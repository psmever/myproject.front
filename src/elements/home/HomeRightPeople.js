import React from "react";

export const HomeRightPeople = () => {
    return (
        <div className="widget">
            <div className="widget-header">
                <h3 className="widget-caption">People You May Know</h3>
            </div>
            <div className="widget-body bordered-top bordered-sky">
                <div className="card">
                    <div className="content">
                        <ul className="list-unstyled team-members">
                            <li>
                                <div className="row">
                                    <div className="col-xs-3">
                                        <div className="avatar">
                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/guy-2.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        Carlos marthur
                                    </div>

                                    <div className="col-xs-3 text-right">
                                        <button className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-xs-3">
                                        <div className="avatar">
                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-1.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        Maria gustami
                                    </div>

                                    <div className="col-xs-3 text-right">
                                        <button className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-xs-3">
                                        <div className="avatar">
                                            <img src="http://psmever.dlinkddns.com:4040/resource/img/Friends/woman-2.jpg" alt="Circle_Image" className="img-circle img-no-padding img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        Angellina mcblown
                                    </div>

                                    <div className="col-xs-3 text-right">
                                        <button className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
