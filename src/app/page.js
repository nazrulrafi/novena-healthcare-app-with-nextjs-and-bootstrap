import React from 'react';
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Service from "@/components/Service";
import Appointment from "@/components/Appointment";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

function Home(props) {
    return (
        <>
          <Header/>
          <Banner/>
          <Features/>
            <About/>
            <Cta/>
            <Service/>
            <Appointment/>
            <Testimonial/>
            <Clients/>
            <Footer/>
        </>
    );
}

export default Home;