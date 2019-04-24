import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import Spinner from 'react-spinner-material';

const divStyle = {
    center: {
        position: 'absolute',
        margin: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100px',
        height: '100px',
        backgroundcolor: '#ccc',
        borderradius: '3px',
    }
};

export class GlobalLoading extends Component {

    render() {

        return (
            <div className="container ">
                <section className="error-container text-center">
                    <div style={divStyle.center}>
                        <Spinner size={50} spinnerColor='#0366d6' spinnerWidth={2} visible={true} />
                    </div>
                </section>
            </div>
        );
    }
}



export default withRouter((GlobalLoading));