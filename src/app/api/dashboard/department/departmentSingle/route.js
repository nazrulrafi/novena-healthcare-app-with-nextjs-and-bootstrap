import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache.js";
const prisma = new PrismaClient();


export async function POST(req) {
    try {
        const body = await req.json();

        const department = await prisma.department.create({
            data: {
                dep_name: body.dep_name,
                dep_title: body.dep_title,
                dep_description_title: body.dep_description_title,
                dep_excerpt: body.dep_excerpt,
                dep_description: body.dep_description,
                dep_thumbnail_image: body.dep_thumbnail_img,
                dep_feature_image: body.dep_feature_image,
                dep_services_features: body.dep_services_feature,
            },
        });
        revalidatePath('/dashboard/department/addNewDepartment');
        return NextResponse.json({ message: "success", data: department,status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to create department", error }, { status: 500 });
    }
}

// PUT request to update a department
export async function PUT(req) {
    try {

        const body = await req.json();
        const {
            id,
            dep_name,
            dep_title,
            dep_description_title,
            dep_excerpt,
            dep_description,
            dep_thumbnail_img,
            dep_feature_image,
            dep_services_feature
        } = body;

        if (!id) {
            return NextResponse.json({ message: "Department ID is required" }, { status: 400 });
        }


        const department = await prisma.department.update({
            where: { id },  // Find the department by its ID
            data: {
                dep_name,
                dep_title,
                dep_description_title,
                dep_excerpt,
                dep_description,
                dep_thumbnail_image: dep_thumbnail_img,  // Thumbnail image URL
                dep_feature_image: dep_feature_image,    // Feature image URL
                dep_services_features: dep_services_feature,  // Services features (JSON string)
            },
        });

        revalidatePath('/dashboard/department');
        return NextResponse.json({ message: "success", data: department, status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to update department", error }, { status: 500 });
    }
}


export async function DELETE(req, { params }) {
    const body = await req.json();
    const id = body.id
    try {
        await prisma.department.delete({
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


