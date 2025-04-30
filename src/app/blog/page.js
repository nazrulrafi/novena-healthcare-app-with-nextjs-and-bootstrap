import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import BlogWrap from "@/components/blogPage/BlogWrap";

function Page(props) {
    return (
        <>
            <Header/>
            <PageTitle title="Blog articles"/>
            <BlogWrap/>
            <Footer/>
        </>
    );
}

export default Page;