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

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    const body = await request.json()
    
    const muscleGroup = await prisma.muscleGroup.update({
      where: { id },
      data: {
        name: body.name,
      },
    })
    return NextResponse.json(muscleGroup)
  } catch (error) {
    console.error('Error updating muscle group:', error)
    return NextResponse.json({ error: 'Failed to update muscle group' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    await prisma.muscleGroup.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Muscle group deleted successfully' })
  } catch (error) {
    console.error('Error deleting muscle group:', error)
    return NextResponse.json({ error: 'Failed to delete muscle group' }, { status: 500 })
  }
} 