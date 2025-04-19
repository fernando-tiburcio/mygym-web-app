import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const muscleGroups = await prisma.muscleGroup.findMany({
      select: {
        id: true,
        name: true,
      },
    })
    return NextResponse.json(muscleGroups)
  } catch (error) {
    console.error('Error fetching muscle groups:', error)
    return NextResponse.json({ error: 'Failed to fetch muscle groups' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const muscleGroup = await prisma.muscleGroup.create({
      data: {
        name: body.name,
      },
    })
    return NextResponse.json(muscleGroup)
  } catch (error) {
    console.error('Error creating muscle group:', error)
    return NextResponse.json({ error: 'Failed to create muscle group' }, { status: 500 })
  }
} 