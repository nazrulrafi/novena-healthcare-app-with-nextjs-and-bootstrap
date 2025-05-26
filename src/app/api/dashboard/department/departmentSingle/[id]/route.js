import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache.js";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { id } =await params;

    try {
        const department = await prisma.department.findUnique({
            where: { id: parseInt(id) },
        });

        if (!department) {
            return NextResponse.json({ message: 'fail', data: null }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: department }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'fail', error: error.message }, { status: 500 });
    }
}