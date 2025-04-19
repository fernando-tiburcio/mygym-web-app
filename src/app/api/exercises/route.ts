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