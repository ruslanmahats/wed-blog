import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'

export const GET = async () => {
	try {
		const categories = await prisma.category.findMany()
		return NextResponse.json(categories, { status: 200 })
	} catch (err) {
		console.log(err)
		return NextResponse.json({ message: 'Something get wrong!' }, { status: 500 })
	}
}
