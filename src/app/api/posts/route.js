import { NextResponse } from 'next/server';
import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';

export const POST_PER_PAGE = 6;

export async function GET(req) {
	const { searchParams } = new URL(req.url);

	const page = searchParams.get('page');
	const cat = searchParams.get('cat');

	const query = {
		take: POST_PER_PAGE,
		skip: POST_PER_PAGE * (page - 1),
		where: {
			...(cat && { catSlug: cat }),
		},
		orderBy: { createdAt: 'desc' },
	};

	try {
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({ where: query.where }),
		]);
		return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify({ message: 'Something get wrong!' }, { status: 500 }));
	}
}

// CREATE A NEW POST
export async function POST(req) {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 }));
	}

	try {
		const body = await req.json();

		const post = await prisma.post.create({
			data: { ...body, userEmail: session.user.email },
		});
		return new NextResponse(JSON.stringify(post, { status: 201 }));
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify({ message: 'Something get wrong!' }, { status: 500 }));
	}
}
