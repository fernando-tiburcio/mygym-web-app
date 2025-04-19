import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

interface WorkoutDetail {
  name: string
  repetitions: number
  series: number
  description: string
  details: string
  rest: number
  exerciseId: string
}

export async function GET() {
  try {
    const workouts = await prisma.workout.findMany({
      select: {
        id: true,
        active: true,
        created_at: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        workoutDetails: {
          select: {
            id: true,
            name: true,
            repetitions: true,
            series: true,
            description: true,
            details: true,
            rest: true,
            exercise: {
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
            },
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    })
    return NextResponse.json(workouts)
  } catch (error) {
    console.error('Error fetching workouts:', error)
    return NextResponse.json({ error: 'Failed to fetch workouts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const workout = await prisma.workout.create({
      data: {
        active: body.active,
        userId: body.userId,
        workoutDetails: {
          create: body.workoutDetails.map((detail: WorkoutDetail) => ({
            name: detail.name,
            repetitions: detail.repetitions,
            series: detail.series,
            description: detail.description,
            details: detail.details,
            rest: detail.rest,
            exerciseId: detail.exerciseId,
          })),
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        workoutDetails: {
          include: {
            exercise: {
              include: {
                muscleGroup: true,
                equipment: true,
              },
            },
          },
        },
      },
    })
    return NextResponse.json(workout)
  } catch (error) {
    console.error('Error creating workout:', error)
    return NextResponse.json({ error: 'Failed to create workout' }, { status: 500 })
  }
} 