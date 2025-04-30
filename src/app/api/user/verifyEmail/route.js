import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {SendEmail} from "@/utility/EmailUtility";

export async function GET(req,res){
    try {
        const prisma = new PrismaClient();
        let {searchParams} = new URL(req.url);
        let email = searchParams.get("email");

        const count = await prisma.user.count({where:{email:email}})
        if (count===1){
            let code = Math.floor(100000+Math.random()*900000);
            let EmailText= `Your OTP Code is=${code}`
            let EmailSubject = "Novera Verification Code";
           await SendEmail(email,EmailText,EmailSubject);
            let result = await prisma.user.update({
                where:{email:email},
                data:{otp:code.toString()}
            })

            return NextResponse.json({status:"success",data:result});
        }else {
            return NextResponse.json({status:"fail",data:"No UserDropDown.jsx Found"});
        }

    }catch (e){
        return NextResponse.json({status:"fail",data:e});
    }
}













