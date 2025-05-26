import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ success: true, data: users });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { fName, lName, email, password, role } = await req.json();

        if (!['SUBSCRIBER', 'EDITOR', 'ADMIN'].includes(role)) {
            return NextResponse.json({ success: false, message: 'Invalid role' }, { status: 400 });
        }
        const otp = "0";
        const user = await prisma.user.create({
            data: { fName, lName, email, password, role, otp },
        });

        return NextResponse.json({ success: true, data: user }, { status: 201 });
    } catch (error) {
        console.error('POST error:', error); // 👈 add this line
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}


export async function PUT(req) {
    try {
        const { id, fName, lName, email, password, role } = await req.json();

        // Validate 'id' existence & type
        if (!id || typeof id !== 'number') {
            return NextResponse.json({ success: false, message: 'Invalid or missing user ID' }, { status: 400 });
        }

        // Update user in DB
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { fName, lName, email, password, role },
        });

        return NextResponse.json({ success: true, data: updatedUser });
    } catch (error) {
        console.error('PUT error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}


export async function DELETE(req) {
    try {
        const { id } = await req.json();
        await prisma.user.delete({ where: { id } });
        return NextResponse.json({ success: true, message: 'User deleted' });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
