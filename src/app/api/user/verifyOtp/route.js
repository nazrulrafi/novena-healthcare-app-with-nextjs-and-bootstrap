import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const count = await prisma.user.count({where: reqBody});
        if (count === 1) {
            return NextResponse.json({status:"success",data:"Valid Otp Code"});
        }else {
            return NextResponse.json({status:"fail",data:"Invalid Otp Code"});
        }
    }catch(err) {
        return NextResponse.json({status:"fail",data:e});
    }
}