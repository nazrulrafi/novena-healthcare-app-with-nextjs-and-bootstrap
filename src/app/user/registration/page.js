import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RegistrationForm from "@/components/dashboard/RegistrationForm";

export default function Page() {
    const token = cookies().get("token")?.value;

    if (token) {
        redirect("/");
    }

    return <RegistrationForm />;
}
