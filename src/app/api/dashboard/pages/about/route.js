import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache.js";
const prisma = new PrismaClient();


export async function GET() {
    try {
        const aboutPage = await prisma.page.findFirst({
            where: { metaKey: 'about_page' },
            include: {
                pagemeta: {
                    orderBy: {
                        id: 'asc',
                    },
                },
            },
        });

        if (!aboutPage) {
            return NextResponse.json({ message: 'About page not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: aboutPage.pagemeta  },{ status: 200 });
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
        const body = await req.json();

        const page = await prisma.page.findFirst({
            where: { metaKey: 'about_page' },
        });

        if (!page) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }

        const pageId = page.id;

        const metaEntries = Object.entries(body); // [ [metaKey, value], ... ]

        // Loop and upsert each key-value pair
        await Promise.all(
            metaEntries.map(([metaKey, value]) =>
                prisma.pagemeta.upsert({
                    where: {
                        metaKey_pageId: {
                            metaKey,
                            pageId,
                        },
                    },
                    update: {
                        value,
                    },
                    create: {
                        metaKey,
                        value,
                        pageId,
                    },
                })
            )
        );
        revalidatePath('/dashboard/pages/about');

        return NextResponse.json({message:"success",status:200,data:body });
    } catch (error) {
        console.error('Meta save error:', error);
        return NextResponse.json(
            { message: 'fail', error: error.message },
            { status: 500 }
        );
    }
}
