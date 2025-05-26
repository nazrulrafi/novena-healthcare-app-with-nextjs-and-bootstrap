import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const data = await req.json();

        const appointment = await prisma.appointment.create({
            data: {
                name: data.name,
                phone: data.phone,
                date: data.date,
                time: data.time,
                message: data.message || '',
                departmentName: data.departmentName,
                doctorName: data.doctorName,
                confirm: false,
            },
        });

        return NextResponse.json({ success: true, data:appointment });
    } catch (error) {
        console.error('Appointment Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}



