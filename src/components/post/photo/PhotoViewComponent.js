import React, { Component } from "react";
import _ from 'lodash';
import { withRouter } from "react-router-dom";
import { MainNav, Footer } from 'elements';
import { PhotoViewRoot } from './sub/PhotoViewRoot';

import * as Helper from 'lib/Helper';

export class PhotoViewComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post_uuid: false,
        }
    }

    componentWillMount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL MOUNT!', state: this.state})
    }

    componentDidMount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component DID MOUNT!', state: this.state})
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL RECIEVE PROPS!', nextProps: nextProps})

        // Helper.DEBUG({ next: nextProps.match.params.post_uuid, this: this.props.match.params.post_uuid });

        if(_.isEqual(nextProps.match.params.post_uuid, this.props.match.params)) {
            // console.log(1);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'PhotoViewComponent ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        if( !_.isEqual(nextProps.match.params.post_uuid, this.state.post_uuid) ) {
            this.setState({
                post_uuid: nextProps.match.params.post_uuid
            });
        }
        return true;
    }

    componentWillUnmount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL UNMOUNT!' , state: this.state})
    }


    componentWillUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})
    }

    componentDidUpdate(prevProps, prevState) {
        Helper.DEBUG({ name:'PhotoViewComponent Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
    }





    render() {
        return (
            <div>
                <MainNav />

                <PhotoViewRoot />

                <Footer />

            </div>

        );
    }
};

export default withRouter(PhotoViewComponent);