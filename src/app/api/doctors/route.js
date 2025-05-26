import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
const prisma = new PrismaClient();

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const departmentId = searchParams.get("departmentId");

        if (!departmentId) {
            return NextResponse.json({ message: "Missing departmentId" }, { status: 400 });
        }

        const doctors = await prisma.doctor.findMany({
            where: {
                departmentId: parseInt(departmentId),
            },
            include: {
                department: true,
            },
        });

        return NextResponse.json(doctors);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        return NextResponse.json({ message: "fail", error: error.message }, { status: 500 });
    }
}

