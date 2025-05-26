import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import DepartmentSingle from "@/components/departmentPage/DepartmentSingle";
import DepartmentTitle from "@/components/departmentPage/DepartmentTitle.jsx";
import DoctorTitle from "@/components/doctorPage/DoctorTitle.jsx";
import DoctorSingle from "@/components/doctorPage/DoctorSingle.jsx";

async function getSingleDoctor(id) {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/pages/doctors/${id}`, {
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
export default async function Page({ params }) {
    const { id } = await params;
    const departmentData = await getSingleDoctor(id);

    return (
        <>
            <Header />
            <DoctorTitle data={departmentData} />
            <DoctorSingle data={departmentData} />
            <Footer/>
        </>
    );
}
