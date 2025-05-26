import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import Service from "@/components/departmentPage/Services";

async function getDepartmentData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/department`, {
            cache: 'no-store',
        });

        const homePageMeta = await res.json();
        if (!homePageMeta || homePageMeta.message === "fail") {
            return null;
        }
        return homePageMeta.data;
    } catch (error) {
        return null;
    }
}

export default async function DepartmentPage() {
    const data = await getDepartmentData();

    return (
        <>
            <Header />
            <PageTitle title="Care Department" />
            <Service departmentData={data || []} />
            <Footer />
        </>
    );
}
