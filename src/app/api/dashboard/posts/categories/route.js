import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all tags
export async function GET() {
    try {
        const tags = await prisma.category.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json({ success: true, data: tags }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// POST new tag
export async function POST(req) {
    try {
        const { name } = await req.json();
        const category = await prisma.category.create({
            data: { name },
        });
        return NextResponse.json({ success: true, data: category }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// PUT to update tag
export async function PUT(req) {
    try {
        const { id, name } = await req.json();
        const tag = await prisma.category.update({
            where: { id },
            data: { name },
        });
        return NextResponse.json({ success: true, data: tag }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// DELETE a tag
export async function DELETE(req) {
    try {
        const { id } = await req.json();
        await prisma.category.delete({
            where: { id },
        });
        return NextResponse.json({ success: true, message: 'Tag deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
