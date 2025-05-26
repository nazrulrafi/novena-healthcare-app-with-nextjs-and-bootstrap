import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();


export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                tags: true,
                categories: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return Response.json({ success: true, data: posts });
    } catch (err) {
        console.error(err);
        return Response.json({ success: false, message: "Failed to fetch posts." }, { status: 500 });
    }
}