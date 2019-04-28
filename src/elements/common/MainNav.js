import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import * as Helper from 'lib/Helper'


export class MainNav extends Component {

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

    NavStart = () => {
        this._userLoginCheck();
    }


    componentWillMount() {
        this.NavStart();
    }

    render() {

        return (
            // <!-- Fixed navbar -->
            <nav className="navbar navbar-white navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/home"><b>DayDay</b></Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="actives"><Link className="btn btn-default shiny" to="/account/home">Profile</Link></li>
                            <li><Link className="btn btn-default shiny" to="/profile/timeline">홈</Link></li>
                            <li>
                                {
                                    this.state.login_state ? ( <Link to="/auth/logout" className="btn btn-default shiny">로그아웃</Link> ) : ( <Link to="/auth/logout" className="btn btn-default shiny">로그아웃</Link> )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
const mapStateToProps = state => ({
    login_state: state.base.login.login_state,
});


export default withRouter(connect(
    mapStateToProps,
)(MainNav));