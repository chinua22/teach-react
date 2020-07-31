import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Start from "./components/Start";
import About from "./components/About";
import Grat from "./components/Grat";
import VideoFeatures from "./components/VideoFeatures";
import Features from "./components/Features";
import Ourfeatures from "./components/Ourfeatures";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Subscribe from "./components/Subscribe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Nav />
            <Start />
            <About />
            <Grat />
            <VideoFeatures />
            <Features />
            <Ourfeatures />
            <Testimonial />
            <Download />
            <Card />
            <FAQ />
            <Subscribe />
            <Contact />
            <Footer />
        </div>
    );
}
//
