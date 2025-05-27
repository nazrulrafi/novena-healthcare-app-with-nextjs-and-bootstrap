import {NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'
import {CreateToken} from "@/utility/JWTTokenHelper";
import bcrypt from "bcryptjs"; // ✅ import bcrypt

const prisma = new PrismaClient()


export async function POST(req) {
    try {
        const reqBody = await req.json();

        // ✅ Find user by email
        const user = await prisma.user.findUnique({
            where: { email: reqBody.email },
        });

        // ✅ If no user found
        if (!user) {
            return NextResponse.json({ status: "error", error: "User not found" });
        }

        // ✅ Compare password
        const isPasswordValid = await bcrypt.compare(reqBody.password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ status: "error", error: "Invalid credentials" });
        }

        // ✅ Generate token
        const token = await CreateToken(user.email, user.id, user.role);

        // ✅ Set cookie
        const expireDuration = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hours
        const cookieString = `token=${token};expires=${expireDuration.toUTCString()};path=/`;

        return NextResponse.json(
            { status: "success", data: token, userId: user.id },
            { status: 200, headers: { 'set-cookie': cookieString } }
        );
    } catch (err) {
        return NextResponse.json({ status: "fail", data: err.message });
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