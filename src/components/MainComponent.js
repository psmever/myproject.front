import React, { Component } from "react";
import { Footer, SingleNav } from 'elements';


export class MainComponents extends Component {

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

export default MainComponents;