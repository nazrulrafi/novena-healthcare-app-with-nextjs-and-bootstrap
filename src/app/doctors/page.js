import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import Doctors from "@/components/doctorPage/doctors";
import Cta from "@/components/doctorPage/Cta";

function Page(props) {
    return (
      <>
        <Header/>
          <PageTitle title="Specalized doctors"/>
          <Doctors/>
          <Cta/>
        <Footer/>
      </>
    );
}

export default Page;