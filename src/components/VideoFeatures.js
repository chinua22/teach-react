import React from "react";
import ReactPlayer from "react-player";

export default function VideoGrat() {
    return (
        <section id="gratApplication2">
            <div className="ImageApp">
                <div id="Imagestack2">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=U9T6YkEDkMo"
                        className="checkVideo"
                    />
                </div>
            </div>
            <div id="videoGrat">
                <span>VIDEO FEATURES ______</span>
                <h3>Grat Application Ever</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    <br /> adipisicing elit. Cupiditate ab totam illo
                    <br /> quo nam ipsam fuga, modi, nesciunt dolor
                    <br /> exercitationem illum in anon architectoipsam
                    <br />
                    odio nam? Enim nesciunt, at explicabo?
                </p>
                <button type="onClick"> LEARN MORE </button>
            </div>
        </section>
    );
}
