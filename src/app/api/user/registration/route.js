import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'; // ✅ Import bcrypt

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        let reqBody = await req.json();

        // ✅ Hash the password before saving
        const hashedPassword = await bcrypt.hash(reqBody.password, 10);
        reqBody.password = hashedPassword;

        reqBody.otp = "0";

        const result = await prisma.user.create({
            data: reqBody,
        });

        return NextResponse.json({ status: "success", data: result });
    } catch (err) {
        return NextResponse.json({ status: "Fail", data: err.message });
    }
}
