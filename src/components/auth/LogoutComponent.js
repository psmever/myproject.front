import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { SingleNav, Footer } from 'elements/common';
import { putShowLoadingAction, putHideLoadingAction } from 'store/Actions';

import * as Helper from 'lib/Helper';

export class LogoutComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            login_state: false
        }
    }

    _userLoginCheck() {

        if(this.state.login_state === false && Helper.isEmpty(this.props.login_state) === false) {
            this.setState({
                login_state: true
            });
        }

    }

    pageStart = () => {
        const { putShowLoadingAction, putHideLoadingAction, history } = this.props;
        putShowLoadingAction();
        this._userLoginCheck();

        localStorage.clear();

        history.push('/auth/login');

        putHideLoadingAction();
    }


    componentWillMount() {
        this.pageStart();
    }

    componentDidMount() {
        this.pageStart();
    }


    render() {

        return (
            <div>
                <div className="_Main_">
                    {/* <!-- Fixed navbar --> */}
                    <SingleNav />

                    <div className="wrapper">
                        <div className="parallax filter-black">
                            <div className="parallax-image">/</div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    login_state: state.base.login.login_state,
});

const mapDispatchToProps = {
    putShowLoadingAction,
    putHideLoadingAction
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutComponent));