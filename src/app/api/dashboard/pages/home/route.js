import { PrismaClient } from '@prisma/client';
import {NextResponse} from "next/server";
const prisma = new PrismaClient();

export async function PUT(req) {
    try {
        const body = await req.json();

        const page = await prisma.page.findFirst({
            where: { metaKey: 'home_page' },
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

        return NextResponse.json({message:"success",status:200,data:body });
    } catch (error) {
        console.error('Meta save error:', error);
        return NextResponse.json(
            { message: 'fail', error: error.message },
            { status: 500 }
        );
    }
}
