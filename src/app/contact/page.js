import React from 'react';
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
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