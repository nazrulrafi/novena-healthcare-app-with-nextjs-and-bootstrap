// File: app/api/dashboard/appointment/route.js or route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const allContact = await prisma.contact.findMany();

        if (allContact.length === 0) {
            return NextResponse.json({ message: 'No appointment found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: allContact }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: 'fail', error: error?.message || 'Something went wrong' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

export async function PUT(req) {
    try {
        const body = await req.json(); // Read JSON body in App Router
        const { id, confirm } = body;

        const updated = await prisma.contact.update({
            where: { id },
            data: { confirm },
        });

        return NextResponse.json({ success: true, data: updated }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Error confirming appointment", error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json();
        const { id } = body;
        await prisma.contact.delete({
            where: { id },
        });
        return NextResponse.json({ success: true,data:id }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Error deleting appointment", error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

