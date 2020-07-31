import React from "react";

export default function Download() {
    return (
        <div className="download">
            <div className="holder">
                <div id="down">
                    <h3>Download The App</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur
                        <br /> adipisicing elit. Velit, ex!
                    </p>
                    <div className="setPic">
                        <a href="#t" className="but-white">
                            <img
                                src="https://colorlib.com/preview/theme/appy/images/play-store-icon.png"
                                alt=""
                            />
                            Play Store
                        </a>

                        <a href="#t" className="but-white">
                            <img
                                src="https://colorlib.com/preview/theme/appy/images/apple-icon.png"
                                alt=""
                            />
                            Apple store
                        </a>
                    </div>
                </div>
                <div className="mobile2">
                    <img
                        src="https://colorlib.com/preview/theme/appy/images/download-image.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
