export const dynamic = 'force-dynamic'; // ✅ Add this

import React from 'react';
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import FeaturePage from "@/components/aboutPage/FeaturePage";
import Awards from "@/components/aboutPage/Awards";
import Team from "@/components/aboutPage/Team";
import Testimonials from "@/components/aboutPage/Testimonials";
import AboutPage from "@/components/aboutPage/AboutPage";
import {getMetaValue} from "@/utility/functions.js";

async function getAboutData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/pages/about`);
        const homePageMeta = await res.json();
        if (!homePageMeta || homePageMeta.message === "fail") {
            return null; // Return null if data is not found
        }
        return homePageMeta.data;
    } catch (error) {
        return null;
    }
}
async function getServices() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/services`, {
            cache: 'no-store', // disable caching
        });
        const data = await res.json();

        if (!data || data.message === 'fail') {
            return null;
        }

        return data.data;
    } catch (err) {
        console.error("Failed to fetch department:", err);
        return null;
    }
}
async function getDoctors() {
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
async function getTestimonial() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/testimonial`);
        const homePageMeta = await res.json();
        if (!homePageMeta || homePageMeta.message === "fail") {
            return null; // Return null if data is not found
        }
        return homePageMeta.data;
    } catch (error) {
        return null;
    }
}
async function About(props) {
    const aboutPageMeta = await getAboutData();
    const servicePageMeta = await getServices();
    const doctorPageMeta = await getDoctors();
    const testimonialPageMeta = await getTestimonial();
    const aboutData = {
        aboutPersonalCareTitle: getMetaValue('about_personal_care_title', aboutPageMeta),
        aboutPersonalCareDescription: getMetaValue('about_personal_care_description', aboutPageMeta),
        aboutDoctorAchievementTitle: getMetaValue('about_doctor_achievement_title', aboutPageMeta),
        aboutTestimonialLeftImage: getMetaValue('about_testimonial_left_image', aboutPageMeta),
        aboutDoctorAchievementImages: getMetaValue('about_doctor_achievement_images', aboutPageMeta),
    };
    return (
        <>
            <Header/>
            <PageTitle  title="About Us"/>
            <AboutPage data={aboutData}/>
            <FeaturePage data={servicePageMeta}/>
            <Awards data={aboutData}/>
            <Team data={doctorPageMeta}/>
            <Testimonials leftImg={aboutData} testimonialData={testimonialPageMeta}/>
            <Footer/>
        </>
    );
}

export default About;