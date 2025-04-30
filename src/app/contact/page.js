import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import ContactInfo from "@/components/contactPage/contactInfo";
import ContactForm from "@/components/contactPage/ContactForm";
import GMap from "@/components/contactPage/GMap";

function Page(props) {
    return (
       <>
           <Header />
           <PageTitle title="Get in Touch"/>
           <ContactInfo/>
           <ContactForm/>
           <GMap/>
           <Footer/>
       </>
    );
}

export default Page;