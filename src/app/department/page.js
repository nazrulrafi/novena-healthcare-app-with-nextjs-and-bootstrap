import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import Service from "@/components/departmentPage/Services";

function DepartmentPage(props) {
    return (
        <>
            <Header />
            <PageTitle title="Care Department"/>
            <Service/>
            <Footer/>
        </>
    );
}

export default DepartmentPage;