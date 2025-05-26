import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { id } =await params;

    try {
        const tag = await prisma.tag.findUnique({
            where: { id: parseInt(id) },
            include: {
                posts: {
                    orderBy: { createdAt: 'desc' },
                },
            },
        });

        if (!tag) {
            return NextResponse.json({ success: false, message: 'Tag not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: tag });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
