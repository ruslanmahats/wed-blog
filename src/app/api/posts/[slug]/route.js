import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'

// GET SINGLE POST
export async function GET(_req, { params }) {
	const { slug } = params

	try {
		const post = await prisma.post.update({
			where: { slug },
			data: { views: { increment: 1 } },
			include: { user: true },
		})

		return NextResponse.json({ post }, { status: 200 })
	} catch (error) {
		console.log(error)

		return NextResponse.json({ message: 'Something get wrong!' }, { status: 500 })
	}
}
