import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
const prisma = new PrismaClient();


export async function POST(req) {
    try {
        const { title, items } = await req.json();

        if (!title || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'Invalid menu data' }, { status: 400 });
        }

        const meta_key = title
            .toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/[^\w_]+/g, '');

        const siteMeta = await prisma.sitemeta.create({
            data: { title, meta_key },
        });

        const formattedItems = items.map((item, index) => ({
            name: item.name,
            link: item.link,
            order: index,
            siteMetaId: siteMeta.id,
        }));

        await prisma.menuitem.createMany({ data: formattedItems });

        return NextResponse.json(
            { message: 'Menus saved/updated successfully',status:"success" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error.message || 'Failed to save menus' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const metaGroups = await prisma.sitemeta.findMany({
            include: {
                menuitem: {
                    orderBy: { order: 'asc' },
                },
            },
        });
        return NextResponse.json({message:"success",data: metaGroups });
    } catch (error) {
        return NextResponse.json({ message:"fail",error: error.message });
    }
}

export async function PUT(req){
    try {
        const { title, meta_key, items } = await req.json();

        if (!title || !meta_key || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
        }

        const siteMeta = await prisma.sitemeta.findUnique({
            where: { meta_key },
        });

        if (!siteMeta) {
            return NextResponse.json({ error: 'meta_key not found. Cannot update.' }, { status: 404 });
        }

        // Update title (optional)
        await prisma.sitemeta.update({
            where: { meta_key },
            data: { title },
        });

        // Delete existing menu items
        await prisma.menuitem.deleteMany({
            where: { siteMetaId: siteMeta.id },
        });

        // Insert new items
        const formattedItems = items.map((item, index) => ({
            name: item.name,
            link: item.link,
            order: index,
            siteMetaId: siteMeta.id,
        }));

        await prisma.menuitem.createMany({
            data: formattedItems,
        });
        return NextResponse.json({
            message: 'Menu updated successfully',
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json();
        const meta_key = body.meta_key;

        if (!meta_key) {
            return NextResponse.json(
                { error: 'meta_key is required' },
                { status: 400 }
            );
        }

        // Find the menu group by meta_key
        const siteMeta = await prisma.sitemeta.findUnique({
            where: { meta_key },
        });

        if (!siteMeta) {
            return NextResponse.json(
                { error: 'Menu group not found' },
                { status: 404 }
            );
        }

        // Delete related menu items first
        await prisma.menuitem.deleteMany({
            where: {
                siteMetaId: siteMeta.id,
            },
        });

        // Then delete the group itself
        await prisma.sitemeta.delete({
            where: { meta_key },
        });

        return NextResponse.json(
            { message: 'Menu group deleted successfully', status: 200 },
            { status: 200 }
        );
    } catch (error) {
        console.error('DELETE error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete menu group' },
            { status: 500 }
        );
    }
}
