import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const exercises = await prisma.exercise.findMany({
      select: {
        id: true,
        name: true,
        muscleGroup: {
          select: {
            id: true,
            name: true,
          },
        },
        equipment: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    return NextResponse.json(exercises)
  } catch (error) {
    console.error('Error fetching exercises:', error)
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const exercise = await prisma.exercise.create({
      data: {
        name: body.name,
        muscleGroupid: body.muscleGroupId,
        equipmentId: body.equipmentId,
      },
      include: {
        muscleGroup: {
          select: {
            id: true,
            name: true,
          },
        },
        equipment: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    return NextResponse.json(exercise)
  } catch (error) {
    console.error('Error creating exercise:', error)
    return NextResponse.json({ error: 'Failed to create exercise' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Exercise ID is required' }, { status: 400 })
    }

    const body = await request.json()
    const exercise = await prisma.exercise.update({
      where: { id },
      data: {
        name: body.name,
        muscleGroupid: body.muscleGroupId,
        equipmentId: body.equipmentId,
      },
      include: {
        muscleGroup: {
          select: {
            id: true,
            name: true,
          },
        },
        equipment: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    return NextResponse.json(exercise)
  } catch (error) {
    console.error('Error updating exercise:', error)
    return NextResponse.json({ error: 'Failed to update exercise' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Exercise ID is required' }, { status: 400 })
    }

    await prisma.exercise.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Exercise deleted successfully' })
  } catch (error) {
    console.error('Error deleting exercise:', error)
    return NextResponse.json({ error: 'Failed to delete exercise' }, { status: 500 })
  }
} 