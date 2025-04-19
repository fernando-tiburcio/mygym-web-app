import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const equipment = await prisma.equipment.findMany({
      select: {
        id: true,
        name: true,
        picture: true,
        muscleGroup: {
          select: {
            id: true,
            name: true,
          },
        },
        equipmentType: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    return NextResponse.json(equipment)
  } catch (error) {
    console.error('Error fetching equipment:', error)
    return NextResponse.json({ error: 'Failed to fetch equipment' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const equipment = await prisma.equipment.create({
      data: {
        name: body.name,
        picture: body.picture,
        muscleGroupId: body.muscleGroupId,
        equipmentTypeId: body.equipmentTypeId,
      },
      include: {
        muscleGroup: {
          select: {
            id: true,
            name: true,
          },
        },
        equipmentType: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    return NextResponse.json(equipment)
  } catch (error) {
    console.error('Error creating equipment:', error)
    return NextResponse.json({ error: 'Failed to create equipment' }, { status: 500 })
  }
} 