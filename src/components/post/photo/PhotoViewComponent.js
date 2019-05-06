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
        if( !_.isEqual(this.props.match.params.post_uuid, this.state.post_uuid) ) {
            this._setPostUUid(this.props.match.params.post_uuid)
        }
        Helper.DEBUG({
            now: this.state.post_uuid,
        });
    }

    componentDidMount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component DID MOUNT!', state: this.state})

        Helper.DEBUG({
            now: this.state.post_uuid,
        });
    }

    componentWillReceiveProps(nextProps) {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL RECIEVE PROPS!', nextProps: nextProps})

        // Helper.DEBUG({ next: nextProps.match.params.post_uuid, this: this.props.match.params.post_uuid });

     }

    shouldComponentUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'PhotoViewComponent ShouldComponentUpdate', nextProps: nextProps, nextState:nextState});

        Helper.DEBUG({
            now: this.state.post_uuid,
        });

        return true;
    }

    componentWillUnmount() {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL UNMOUNT!' , state: this.state})

        Helper.DEBUG({
            now: this.state.post_uuid,
        });
    }


    componentWillUpdate(nextProps, nextState) {
        Helper.DEBUG({ name:'PhotoViewComponent Component WILL UPDATE!' , nextProps: nextProps, nextState:nextState})

        Helper.DEBUG({
            now: this.state.post_uuid,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        Helper.DEBUG({ name:'PhotoViewComponent Component DID UPDATE!' , prevProps: prevProps, prevState:prevState})
        Helper.DEBUG({
            this_state: this.state
        });
    }


    _setPostUUid = (new_post_uuid) => {

        this.setState({
            post_uuid: new_post_uuid
        });
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