import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { id } =await params;

    try {
        const category = await prisma.category.findUnique({
            where: { id: parseInt(id) },
            include: {
                posts: {
                    orderBy: { createdAt: 'desc' },
                },
            },
        });

        if (!category) {
            return NextResponse.json({ success: false, message: 'Tag not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: category });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
