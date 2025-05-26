import React from 'react';
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import Appointment from "@/components/appointmentPage/appointment";

function Page(props) {
    return (
     <>
         <Header/>
         <PageTitle title="Appoinment"/>
         <Appointment/>
         <Footer/>
     </>
    );
}

export default Page;