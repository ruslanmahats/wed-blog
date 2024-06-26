import { NextResponse } from 'next/server'
import { getAuthSession } from '@/utils/auth'
import prisma from '@/utils/connect'

// GET ALL COMMENTS OF A POST
export async function GET(req) {
	const { searchParams } = new URL(req.url)
	const postSlug = searchParams.get('postSlug')

	try {
		const comments = await prisma.comment.findMany({
			where: { ...(postSlug && { postSlug }) },
			include: { user: true },
			orderBy: { createdAt: 'desc' },
		})

		return NextResponse.json(comments, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: 'Something get wrong!' }, { status: 500 })
	}
}

// CREATE A NEW COMMENT
export async function POST(req) {
	const session = await getAuthSession()

	if (!session) {
		return NextResponse.json({ massage: 'Not Authenticated!' }, { status: 401 })
	}

	try {
		const body = await req.json()

		const comment = await prisma.comment.create({
			data: { ...body, userEmail: session.user.email },
		})

		return NextResponse.json(comment, { status: 201 })
	} catch (error) {
		return NextResponse.json({ message: 'Something get wrong!' }, { status: 500 })
	}
}
