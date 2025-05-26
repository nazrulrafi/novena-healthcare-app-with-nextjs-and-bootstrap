import React from 'react';
import Header from "@/components/master/Header.jsx";
import Banner from "@/components/homePage/Banner.jsx";
import Features from "@/components/homePage/Features.jsx";
import About from "@/components/homePage/About.jsx";
import ClientCount from "@/components/homePage/ClientCount.jsx";
import Service from "@/components/homePage/Service.jsx";
import Appointment from "@/components/homePage/Appointment.jsx";
import Testimonial from "@/components/homePage/Testimonial.jsx";
import Clients from "@/components/homePage/Clients.jsx";
import Footer from "@/components/master/Footer.jsx";


import {getMetaValue} from "@/utility/functions.js";

// Fetch function
async function getHomeMetaData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/pages/home`);
        const homePageMeta = await res.json();
        if (!homePageMeta || homePageMeta.message === "fail") {
            return null; // Return null if data is not found
        }
        return homePageMeta.data;
    } catch (error) {
        return null;
    }
}
async function getTestimonialMetaData() {
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


export default async function Home() {
    const homePageMeta = await getHomeMetaData();
    const testimonialPageMeta = await getTestimonialMetaData();
    const banner = {
        bannerTitle: getMetaValue('home_banner_title', homePageMeta),
        bannerTopTitle: getMetaValue('home_banner_top_title', homePageMeta),
        bannerSubTitle: getMetaValue('home_banner_sub_title', homePageMeta),
        bannerButtonTitle: getMetaValue('home_banner_button_title', homePageMeta),
        bannerButtonLink: getMetaValue('home_banner_button_link', homePageMeta),
        bannerBgImg: getMetaValue('home_banner_background_image_url', homePageMeta),
    };
    const features = {
        appointment: {
            icon: getMetaValue('home_features_appointmet_icon', homePageMeta),
            title: getMetaValue('home_features_appointmet_title', homePageMeta),
            subTitle: getMetaValue('home_features_appointmet_sub_title', homePageMeta),
            description: getMetaValue('home_features_appointmet_description', homePageMeta),
            buttonTitle: getMetaValue('home_features_appointmet_button_title', homePageMeta),
            buttonLink: getMetaValue('home_features_appointmet_button_link', homePageMeta),
        },
        workingHours: {
            icon: getMetaValue('home_features_working_hours_icon', homePageMeta),
            title: getMetaValue('home_features_working_hours_title', homePageMeta),
            subTitle: getMetaValue('home_features_working_hours_sub_title', homePageMeta),
            subContent: getMetaValue('home_features_working_hours_sub_content', homePageMeta),
        },
        emergency: {
            icon: getMetaValue('home_features_emergency_icon', homePageMeta),
            title: getMetaValue('home_features_emergency_title', homePageMeta),
            subTitle: getMetaValue('home_features_emergency_sub_title', homePageMeta),
            description: getMetaValue('home_features_emergency_description', homePageMeta),
        }
    };

    const about = {
        homeAboutImg01: getMetaValue('home_about_img_01', homePageMeta),
        homeAboutImg02: getMetaValue('home_about_img_02', homePageMeta),
        homeAboutImg03: getMetaValue('home_about_img_03', homePageMeta),
        homeAboutTitle: getMetaValue('home_about_title', homePageMeta),
        homeAboutDescription: getMetaValue('home_about_description', homePageMeta),
        homeAboutButtonTitle: getMetaValue('home_about_button_title', homePageMeta),
        homeAboutButtonLink: getMetaValue('home_about_button_link', homePageMeta),
    };

    const count = {
        homeClientCount: getMetaValue('home_client_count', homePageMeta),
    };

    const allServices = {
        homeServiceSecTitle: getMetaValue('home_service_sec_title', homePageMeta),
        homeServiceSecDecription: getMetaValue('home_service_sec_description', homePageMeta),
        homeAllServices: getMetaValue('home_all_services', homePageMeta),
    };

    const appointmentInfo = {
        homeAppointmentTitle: getMetaValue('home_appointment_title', homePageMeta),
        homeAppointmentDescription: getMetaValue('home_appointment_description', homePageMeta),
        homeAppointmentImgUrl: getMetaValue('home_appointment_img_url', homePageMeta),
        homeAppointmentNumber: getMetaValue('home_appointment_number', homePageMeta),
    };
    const testimonialInfo = {
        homeTestimonialTitle: getMetaValue('home_testimonial_sec_title', homePageMeta),
        homeTestimonialDescription: getMetaValue('home_testimonial_sec_description', homePageMeta),
        allTestimonials: getMetaValue('all_testimonials', testimonialPageMeta),
    };

    const clientLogos = {
        homeClientLogoSecTitle: getMetaValue('home_client_logo_sec_title', homePageMeta),
        homeClientLogoSecDescription: getMetaValue('home_client_logo_sec_description', homePageMeta),
        homeClientAllLogos: getMetaValue('home_client_all_logos', homePageMeta),
    };
    return (
        <>
            <Header />
            <Banner {...banner}/>
            <Features {...features}/>
            <About {...about}/>
            <ClientCount {...count}/>
            <Service {...allServices}/>
            <Appointment {...appointmentInfo}/>
            <Testimonial {...testimonialInfo}/>
            <Clients {...clientLogos}/>
            <Footer />
        </>
    );
}


