import React, { Component } from "react";
import { SingleNav, Footer } from 'elements';

export class RegisterComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            base : false,
        }
    }

    _goAccount = () => {
        const { history } = this.props;

        history.push('/account/view');
    }

    _goAccountBasic = () => {
        const { history } = this.props;

        history.push('/account/view?m=basic');
    }

    _goAccountPersonal = () => {
        const { history } = this.props;

        history.push('/account/view?m=personal');
    }

    _goAccountPassword = () => {
        const { history } = this.props;

        history.push('/account/view?m=password');
    }

    render() {

        const {_goAccount, _goAccountBasic, _goAccountPersonal, _goAccountPassword} = this

        return (
            <div>
                {/* <!-- Fixed navbar --> */}
                <SingleNav />

                <div className="wrapper">

                    <div className="parallax filter-black">
                        <div className="parallax-image"></div>
                        <div className="small-info">
                            <div className="col-sm-10 col-sm-push-1 col-md-5 col-md-push-4 col-lg-3 col-lg-push-5">
                                <div className="card-group animated flipInX">
                                    <div className="card">
                                        <div className="card-block">
                                        <div className="center">
                                                <h4 className="m-b-0"><span className="icon-text">테스트 페이지</span></h4>
                                        </div>
                                        <button type="button" className="btn btn-blue active" onClick = {_goAccount}>account</button>

                                        <button type="button" className="btn btn-blue active" onClick = {_goAccountBasic}>기본정보</button>
                                        <button type="button" className="btn btn-blue active" onClick = {_goAccountPersonal}>개인정보</button>
                                        <button type="button" className="btn btn-blue active" onClick = {_goAccountPassword}>패스워드</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        );


    }
};

export default RegisterComponent;