import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, phone, message } = body;

        if (!name || !email || !subject || !phone || !message) {
            return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
        }

        const contact = await prisma.contact.create({
            data: { name, email, subject, phone, message },
        });

        return NextResponse.json({ success: true, data: contact });
    } catch (error) {
        console.error("Error saving contact:", error);
        return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
    }
}
