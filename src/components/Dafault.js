import React, { Component } from "react";
import { MainNav, Footer } from 'elements';
import * as Helper from 'lib/Helper';

export class Default extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }

    componentWillMount() {
        Helper.DEBUG({ name:'Component WILL MOUNT!', state: this.state})
    }

    componentDidMount() {
        Helper.DEBUG({ name:'Component DID MOUNT!', state: this.state})
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'Component WILL RECIEVE PROPS!', nextProps: nextProps})
    }

    shouldComponentUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        return true;
    }

    componentWillUnmount() {
        Helper.DEBUG({ name:'Component WILL UNMOUNT!' , state: this.state})
    }


    componentWillUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        Helper.DEBUG({ name:'Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }

    componentDidCatch(error, info) {
        Helper.DEBUG({ name:'Component DID Catch!' , error: error, info: info})
        //Handle error.
    }


    render() {
        return (
            <div>
                <MainNav />



                <Footer />

            </div>

        );
    }
};

export default Default;