import {NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'
import {CreateToken} from "@/utility/JWTTokenHelper";

const prisma = new PrismaClient()

export async function POST(req, res) {
    try {
        let reqBody = await req.json()
        const result = await prisma.user.findUnique({
            where:reqBody
        })
        if (!result) {
            return NextResponse.json({status: "error", error: result});
        }else {
            let token = await CreateToken(result["email"], result["id"],result["role"]);
            let expireDuration = new Date(Date.now() + 1000*60*60*1000 );
            const cookieSting = `token=${token};expires=${expireDuration.toUTCString()};path=/`;
            return NextResponse.json({ status: "success", data: token,userId:result["id"] }, { status: 200, headers: { 'set-cookie': cookieSting } });
        }
    }catch (err){
        return NextResponse.json({ status: "fail", data: err });
    }
}


export async function GET(req,res){
    let expireDuration = new Date(Date.now() - 1000*60*60*1000 );
    const response = NextResponse.redirect(new URL("/",req.url),303);
    response.cookies.set("token","",{
        expires:expireDuration
    })
    return response;
}