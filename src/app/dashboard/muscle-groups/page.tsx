'use client'

import { useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

interface MuscleGroup {
  id: string
  name: string
}

export default function MuscleGroupsPage() {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMuscleGroups()
  }, [])

  const fetchMuscleGroups = async () => {
    try {
      const response = await fetch('/api/muscle-groups')
      const data = await response.json()
      setMuscleGroups(data)
    } catch (error) {
      console.error('Failed to fetch muscle groups:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Muscle Groups Management</h1>
        <button
          className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FaPlus />
          <span>Add Muscle Group</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {muscleGroups.map((group) => (
              <tr key={group.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{group.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-emerald-400 hover:text-emerald-300 mr-3">
                    <FaEdit />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 