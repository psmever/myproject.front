import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class AccountHomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            start: true
        }

    }

    _handleGoBasicButton = () => {
        const { history } = this.props;

        history.push('/account/basic');
    }

    _handleGoPersonalButton = () => {
        const { history } = this.props;
        history.push('/account/personal');
    }

    _handleGoPasswordButton = () => {
        const { history } = this.props;
        history.push('/account/password');
    }



    render() {


        const { _handleGoBasicButton, _handleGoPersonalButton, _handleGoPasswordButton } = this;


        return (
            <ul className="nav nav-tabs nav-tabs-custom-colored tabs-iconized">
            <button type="button" className="btn btn-default" onClick={_handleGoBasicButton}><i className="fa fa-cog"></i> 기본 정보 수정</button>
            <button type="button" className="btn btn-default" onClick={_handleGoPersonalButton}><i className="fa fa-cog"></i> 개인 정보 수정</button>
            <button type="button" className="btn btn-default" onClick={_handleGoPasswordButton}><i className="fa fa-cog"></i> 비밀 번호 수정</button>
            </ul>
        );


    }
};
export default withRouter(AccountHomeComponent);