import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                _count: {
                    select: { posts: true },
                },
            },
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json({ success: true, data: categories });
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
