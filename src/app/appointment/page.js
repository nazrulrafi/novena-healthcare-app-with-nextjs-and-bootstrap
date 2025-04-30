import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
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