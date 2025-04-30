import React from 'react';
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Footer from "@/components/Footer";
import Service from "@/components/servicePage/Service";
import Cta from "@/components/servicePage/Cta";

function ServicePage(props) {
    return (
        <>
            <Header/>
            <PageTitle title="What We Do"/>
            <Service/>
            <Cta/>
            <Footer/>
        </>
    );
}

export default ServicePage;