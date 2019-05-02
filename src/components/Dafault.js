import React, { Component } from "react";
import { MainNav, Footer } from 'elements';


export class Default extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user_uid: false,
        }
    }

    componentWillMount() {
        console.log({ name:'Component WILL MOUNT!', state: this.state})
        this.pageStart();
    }

    componentDidMount() {
        console.log({ name:'Component DID MOUNT!', state: this.state})
    }

    componentWillReceiveProps(nextProps) {
        console.log({ name:'Component WILL RECIEVE PROPS!', nextProps: nextProps})
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log({ name:'shouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        return true;
    }

    componentWillUnmount() {
        console.log({ name:'Component WILL UNMOUNT!' , state: this.state})
    }


    componentWillUpdate(nextProps, nextState) {
        console.log({ name:'Component WILL UPDATE!' , nextProps: nextProps, nextState,nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        console.log({ name:'Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
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