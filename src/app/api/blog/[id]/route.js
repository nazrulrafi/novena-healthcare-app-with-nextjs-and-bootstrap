import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { id } =await params;

    try {
        const blog = await prisma.post.findUnique({
            where: { id: parseInt(id) },
            include: {
                tags: true,
                categories: true,
            },
        });

        if (!blog) {
            return NextResponse.json({ message: 'fail', data: null }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'fail', error: error.message }, { status: 500 });
    }
}
