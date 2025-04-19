import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { URL } from 'url'

interface WorkoutDetail {
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
        name: true,
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
    console.log(workouts)
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
        name: body.name,
        active: body.active,
        userId: body.userId,
        workoutDetails: {
          create: body.workoutDetails.map((detail: WorkoutDetail) => ({
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

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Workout ID is required' }, { status: 400 })
    }
    
    const body = await request.json()
    
    // First update the main workout data
    await prisma.workout.update({
      where: { id },
      data: {
        name: body.name,
        active: body.active,
        userId: body.userId,
      },
    })
    
    // Handle workout details updates if provided
    if (body.workoutDetails && body.workoutDetails.length > 0) {
      // Delete existing workout details
      await prisma.workoutUnit.deleteMany({
        where: { workoutId: id },
      })
      
      // Create new workout details
      await prisma.workoutUnit.createMany({
        data: body.workoutDetails.map((detail: WorkoutDetail) => ({
          workoutId: id,
          repetitions: detail.repetitions,
          series: detail.series,
          description: detail.description,
          details: detail.details,
          rest: detail.rest,
          exerciseId: detail.exerciseId,
        })),
      })
    }
    
    // Fetch the updated workout with all related data
    const updatedWorkout = await prisma.workout.findUnique({
      where: { id },
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
    
    return NextResponse.json(updatedWorkout)
  } catch (error) {
    console.error('Error updating workout:', error)
    return NextResponse.json({ error: 'Failed to update workout' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Workout ID is required' }, { status: 400 })
    }
    
    // Delete associated workout details first (handling the foreign key relationship)
    await prisma.workoutUnit.deleteMany({
      where: { workoutId: id },
    })
    
    // Then delete the workout
    await prisma.workout.delete({
      where: { id },
    })
    
    return NextResponse.json({ success: true, message: 'Workout deleted successfully' })
  } catch (error) {
    console.error('Error deleting workout:', error)
    return NextResponse.json({ error: 'Failed to delete workout' }, { status: 500 })
  }
} 