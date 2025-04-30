import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import DepartmentSingle from "@/components/departmentPage/DepartmentSingle";

function Page(props) {
    return (
        <>
            <Header/>
            <PageTitle title="Single Department"/>
            <DepartmentSingle/>
            <Footer/>
        </>
    );
}

export default Page;