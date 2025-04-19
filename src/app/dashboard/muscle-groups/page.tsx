'use client'

import { useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

interface MuscleGroup {
  id: string
  name: string
}

export default function MuscleGroupsPage() {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null)
  const [editingGroup, setEditingGroup] = useState<MuscleGroup | null>(null)
  const [formData, setFormData] = useState({
    name: '',
  })

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

  const handleDelete = async (groupId: string) => {
    setSelectedGroupId(groupId)
    setShowDeleteConfirm(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedGroupId) return

    try {
      const response = await fetch(`/api/muscle-groups?id=${selectedGroupId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        toast.success('Muscle group deleted successfully!')
        setShowDeleteConfirm(false)
        setSelectedGroupId(null)
        fetchMuscleGroups()
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || 'Failed to delete muscle group')
      }
    } catch (error) {
      console.error('Failed to delete muscle group:', error)
      toast.error('An unexpected error occurred while deleting the muscle group')
    }
  }

  const handleEdit = (group: MuscleGroup) => {
    setEditingGroup(group)
    setFormData({
      name: group.name,
    })
    setShowModal(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const url = editingGroup ? `/api/muscle-groups?id=${editingGroup.id}` : '/api/muscle-groups'
      const method = editingGroup ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        toast.success(`Muscle group ${editingGroup ? 'updated' : 'created'} successfully!`)
        setShowModal(false)
        setEditingGroup(null)
        fetchMuscleGroups()
        setFormData({ name: '' })
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || `Failed to ${editingGroup ? 'update' : 'create'} muscle group`)
      }
    } catch (error) {
      console.error(`Failed to ${editingGroup ? 'update' : 'create'} muscle group:`, error)
      toast.error(`An unexpected error occurred while ${editingGroup ? 'updating' : 'creating'} the muscle group`)
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
          onClick={() => setShowModal(true)}
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
                  <button 
                    onClick={() => handleEdit(group)}
                    className="text-emerald-400 hover:text-emerald-300 mr-3"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(group.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{editingGroup ? 'Edit Muscle Group' : 'Add New Muscle Group'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false)
                    setEditingGroup(null)
                    setFormData({ name: '' })
                  }}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  {editingGroup ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="text-gray-300 mb-6">Are you sure you want to delete this muscle group? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 