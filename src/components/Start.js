import React from "react";

export default function Start() {
    return (
        <div id="secondPhase">
            <div id="child">
                <div className="appy-app">
                    <h1>
                        Start your amazing <br />
                        stuff through appy.
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        <br />
                        elit. Vero eos beatae officia corporis accusamus, alias
                        <br />
                        fugit voluptate dolor nesciunt aperiam deserunt ut
                    </p>
                    <button onClick="type"> DOWNLOAD APP </button>
                </div>

                <div className="mobile">
                    <div className="cover"></div>
                    <img
                        src="https://colorlib.com/preview/theme/appy/images/header-mobile.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
