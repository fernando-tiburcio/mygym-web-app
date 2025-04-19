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

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Equipment type ID is required' }, { status: 400 })
    }

    const body = await request.json()
    const equipmentType = await prisma.equipmentType.update({
      where: { id },
      data: {
        name: body.name,
      },
    })
    return NextResponse.json(equipmentType)
  } catch (error) {
    console.error('Error updating equipment type:', error)
    return NextResponse.json({ error: 'Failed to update equipment type' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Equipment type ID is required' }, { status: 400 })
    }

    await prisma.equipmentType.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Equipment type deleted successfully' })
  } catch (error) {
    console.error('Error deleting equipment type:', error)
    return NextResponse.json({ error: 'Failed to delete equipment type' }, { status: 500 })
  }
} 