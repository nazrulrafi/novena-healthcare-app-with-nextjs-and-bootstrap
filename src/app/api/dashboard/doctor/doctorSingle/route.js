import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();

        const doctor = await prisma.doctor.create({
            data: {
                departmentId: parseInt(body.departmentId),
                name: body.name,
                designation: body.designation || null,
                facebook: body.facebook || null,
                twitter: body.twitter || null,
                linkedin: body.linkedin || null,
                title: body.title || null,
                description: body.description || null,
                education_qualification: body.education_qualification || null,
                skill: body.skill || null,
                expertise_area: body.expertise_area || null,
                doctor_image: body.doctor_image || null,
            },
        });

        return NextResponse.json({ message: 'Success', data: doctor, status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { message: 'Failed to create doctor', error: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();

        const {
            id,
            name,
            designation,
            facebook,
            twitter,
            linkedin,
            title,
            description,
            education_qualification,
            skill,
            expertise_area,
            doctor_image,
            departmentId,
        } = body;

        if (!id) {
            return NextResponse.json(
                { message: "Doctor ID is required" },
                { status: 400 }
            );
        }

        const updatedDoctor = await prisma.doctor.update({
            where: { id: Number(id) },
            data: {
                name,
                designation,
                facebook,
                twitter,
                linkedin,
                title,
                description,
                education_qualification: typeof education_qualification === "object"
                    ? JSON.stringify(education_qualification)
                    : education_qualification,
                skill,
                expertise_area: typeof expertise_area === "object"
                    ? JSON.stringify(expertise_area)
                    : expertise_area,
                doctor_image,
                departmentId: Number(departmentId),
                updatedAt: new Date(),
            },
        });

        return NextResponse.json(
            { message: "Doctor updated successfully", data: updatedDoctor },
            { status: 200 }
        );
    } catch (error) {
        console.error("Update doctor error:", error);
        return NextResponse.json(
            { message: "Failed to update doctor", error: error.message },
            { status: 500 }
        );
    }
}


export async function DELETE(req, { params }) {
    const body = await req.json();
    const id = body.id
    try {
        await prisma.doctor.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ status: 200, message: "Deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: "Failed to delete", error: error.message },
            { status: 500 }
        );
    }
}