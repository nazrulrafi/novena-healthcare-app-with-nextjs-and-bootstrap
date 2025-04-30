import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import OtpVerifyForm from "@/components/authentication/OtpVerifyForm";

function Page(props) {

    return (
       <OtpVerifyForm/>
    );
}

export default Page;