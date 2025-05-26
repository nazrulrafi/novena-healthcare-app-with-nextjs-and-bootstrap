import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const tags = await prisma.tag.findMany({
            include: {
                _count: {
                    select: { posts: true },
                },
            },
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json({ success: true, data: tags });
    } catch (error) {
        console.error('Failed to fetch tags:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
