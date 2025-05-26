import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache.js";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const allDoctors = await prisma.doctor.findMany({
            include: {
                department: true, // Include department relation
            },
        });

        if (allDoctors.length === 0) {
            return NextResponse.json({ message: 'No doctor found',data:0 }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: allDoctors },{status:200});
    } catch (error) {
        return NextResponse.json(
            { message: 'fail', error: error?.message || 'Something went wrong' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

