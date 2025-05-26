import HomePageClient from "@/components/dashboard/pages/home/HomePageClient.jsx";
import AboutPageWrap from "@/components/dashboard/pages/about/AboutPageWrap.jsx";

async function getHomeMetaData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/pages/about`, {
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
        about_personal_care_title: '',
        about_personal_care_description: '',
        about_doctor_achievement_title: '',
        about_doctor_achievement_images: '',
        about_testimonial_left_image: '',
    };

    if (result) {
        result.forEach(item => {
            initialData[item.metaKey.trim()] = item.value;
        });
    }
    return <AboutPageWrap initialAboutData={initialData} />;
}
