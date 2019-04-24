import React, { Component } from "react";
import { Footer, SingleNav } from 'elements/common';


export class MainComponents extends Component {

    render() {
        console.debug('main');
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

export default MainComponents;