import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from "@/components/dashboard/LoginForm";

export default async function Page() {
    return <LoginForm />;
}
