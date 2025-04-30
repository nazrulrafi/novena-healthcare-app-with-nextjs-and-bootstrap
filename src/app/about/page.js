import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import FeaturePage from "@/components/aboutPage/FeaturePage";
import Awards from "@/components/aboutPage/Awards";
import Team from "@/components/aboutPage/Team";
import Testimonials from "@/components/aboutPage/Testimonials";
import AboutPage from "@/components/aboutPage/AboutPage";
function About(props) {
    return (
        <>
            <Header/>
            <PageTitle  title="About Us"/>
            <AboutPage/>
            <FeaturePage/>
            <Awards/>
            <Team/>
            <Testimonials/>
            <Footer/>
        </>
    );
}

export default About;