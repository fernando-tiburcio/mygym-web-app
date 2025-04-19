import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const equipmentTypes = await prisma.equipmentType.findMany({
      select: {
        id: true,
        name: true,
      },
    })
    return NextResponse.json(equipmentTypes)
  } catch (error) {
    console.error('Error fetching equipment types:', error)
    return NextResponse.json({ error: 'Failed to fetch equipment types' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const equipmentType = await prisma.equipmentType.create({
      data: {
        name: body.name,
      },
    })
    return NextResponse.json(equipmentType)
  } catch (error) {
    console.error('Error creating equipment type:', error)
    return NextResponse.json({ error: 'Failed to create equipment type' }, { status: 500 })
  }
} 