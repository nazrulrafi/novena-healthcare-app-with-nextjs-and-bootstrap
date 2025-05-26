import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const homePage = await prisma.page.findFirst({
            where: { metaKey: 'home_page' },
            include: {
                pagemeta: {
                    orderBy: {
                        id: 'asc',
                    },
                },
            },
        });

        if (!homePage) {
            return NextResponse.json({ message: 'Home page not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'success', data: homePage.pagemeta  });
    } catch (error) {
        return NextResponse.json(
            { message: 'fail', error: error?.message || 'Something went wrong' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
