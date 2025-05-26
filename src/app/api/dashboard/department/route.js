import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache.js";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const allDepartments = await prisma.department.findMany();

        if (allDepartments.length === 0) {
            return NextResponse.json({ message: 'No departments found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: allDepartments });
    } catch (error) {
        return NextResponse.json(
            { message: 'fail', error: error?.message || 'Something went wrong' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
