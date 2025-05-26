import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, description, post_image, tags, categories } = body;

        const newPost = await prisma.post.create({
            data: {
                title,
                description,
                post_image,
                tags: {
                    connect: tags.map(id => ({ id: parseInt(id) })),
                },
                categories: {
                    connect: categories.map(id => ({ id: parseInt(id) })),
                },
            },
        });

        return NextResponse.json({ success: true, data: newPost });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: "Failed to create post." }, { status: 500 });
    }
}

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


export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, title, description, post_image, tags, categories } = body;

        const updatedPost = await prisma.post.update({
            where: { id: parseInt(id) },
            data: {
                title,
                description,
                post_image,
                tags: {
                    set: [],
                    connect: tags.map(tagId => ({ id: parseInt(tagId) })),
                },
                categories: {
                    set: [],
                    connect: categories.map(catId => ({ id: parseInt(catId) })),
                },
            },
            include: {
                tags: true,
                categories: true,
            },
        });

        return NextResponse.json({ success: true, data: updatedPost });
    } catch (err) {
        console.error("PUT /api/dashboard/posts error:", err);
        return NextResponse.json(
            { success: false, message: "Failed to update post." },
            { status: 500 }
        );
    }
}

