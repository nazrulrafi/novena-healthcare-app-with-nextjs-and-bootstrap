import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import DepartmentSingle from "@/components/departmentPage/DepartmentSingle";
import DepartmentTitle from "@/components/departmentPage/DepartmentTitle.jsx";

async function getSingleDepartment(id) {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/department/departmentSingle/${id}`, {
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
    const departmentData = await getSingleDepartment(id);

    return (
        <>
            <Header />
            <DepartmentTitle data={departmentData} />
            <DepartmentSingle data={departmentData} />
            <Footer />
        </>
    );
}
