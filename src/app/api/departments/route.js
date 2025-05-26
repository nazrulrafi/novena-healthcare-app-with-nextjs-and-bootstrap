import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const departments = await prisma.department.findMany({
            select: {
                id: true,
                dep_name: true,
            },
        });
        return NextResponse.json(departments);
    } catch (error) {
        console.error("Error fetching departments:", error);
        return NextResponse.json({ message: "fail", error: error.message }, { status: 500 });
    }
}
