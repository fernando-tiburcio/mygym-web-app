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

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Equipment ID is required' }, { status: 400 })
    }

    const body = await request.json()
    const equipment = await prisma.equipment.update({
      where: { id },
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
    console.error('Error updating equipment:', error)
    return NextResponse.json({ error: 'Failed to update equipment' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Equipment ID is required' }, { status: 400 })
    }

    await prisma.equipment.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Equipment deleted successfully' })
  } catch (error) {
    console.error('Error deleting equipment:', error)
    return NextResponse.json({ error: 'Failed to delete equipment' }, { status: 500 })
  }
} 