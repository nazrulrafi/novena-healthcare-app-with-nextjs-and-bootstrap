import React from 'react';
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import Doctors from "@/components/doctorPage/doctors";
import Cta from "@/components/doctorPage/Cta";

async function getAllDepartmentData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/pages/doctors`);
        const data = await res.json();
        if (!data || data.message === 'fail') {
            return []; // Return empty array if data is not found
        }
        return data.data; // Return the department data
    } catch (error) {
        return []; // Return empty array in case of an error
    }
}
async function Page(props) {
    const doctors = await getAllDepartmentData()

    return (
      <>
        <Header/>
          <PageTitle title="Specalized doctors"/>
          <Doctors doctors={doctors}/>
          <Cta/>
        <Footer/>
      </>
    );
}

export default Page;