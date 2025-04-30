import {NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req, res) {
    try {
       let reqBody = await req.json();
       reqBody.otp="0";
       const result = await prisma.user.create({
           data:reqBody,
       });
       return NextResponse.json({status: "success", data: result});
    }catch(err) {
        return NextResponse.json({status: "Fail", data: err});
    }
}