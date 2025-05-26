import HomePageClient from "@/components/dashboard/pages/home/HomePageClient.jsx";

async function getHomeMetaData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/pages/home`, {
            next: { revalidate: 10 },
        });
        const homePageMeta = await res.json();
        if (!homePageMeta || homePageMeta.message === "fail") {
            return []; // Return null if data is not found
        }
        return homePageMeta.data;
    } catch (error) {
        return null;
    }
}
export default async function Page() {
    const result = await getHomeMetaData();

    // Build initial banner data
    const initialData = {
        home_banner_top_title: 'Default Top Title',
        home_banner_title: 'Default Main Title',
        home_banner_sub_title: 'Default Sub Title',
        home_banner_button_title: 'Click Here',
        home_banner_button_link: 'https://example.com',

        home_features_appointmet_icon: '',
        home_features_appointmet_title: '',
        home_features_appointmet_sub_title: '',
        home_features_appointmet_description: '',
        home_features_appointmet_button_title: '',
        home_features_appointmet_button_link: '',
        home_features_working_hours_icon: 'icofont-ui-clock',
        home_features_working_hours_title: 'Working Hours',
        home_features_working_hours_sub_title: 'Timing schedule',
        home_features_working_hours_sub_content: '',
        home_features_emergency_icon: 'icofont-support',
        home_features_emergency_title: '1-800-700-6200\r\n',
        home_features_emergency_sub_title: 'Emegency Cases',
        home_features_emergency_description: '',

        home_about_img_01:"",
        home_about_img_02:"",
        home_about_img_03:"",
        home_about_title:"",
        home_about_description:"",
        home_about_button_title:"",
        home_about_button_link:"",

        home_client_count: '',

        home_service_sec_title:"",
        home_service_sec_description:"",
        home_all_services:"",

        home_appointment_title:"",
        home_appointment_description:"",
        home_appointment_img_url:"",
        home_appointment_number:"",

        home_testimonial_sec_title:"",
        home_testimonial_sec_description:"",

        home_client_logo_sec_title:"",
        home_client_logo_sec_description:"",
        home_client_all_logos:"",

    };

    if (result) {
        result.forEach(item => {
            initialData[item.metaKey.trim()] = item.value;
        });
    }
    return <HomePageClient initialHomeData={initialData} />;
}
