'use client'

import { useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

interface Exercise {
  id: string
  name: string
  muscleGroup: {
    id: string
    name: string
  }
  equipment: {
    id: string
    name: string
  }
}

interface MuscleGroup {
  id: string
  name: string
}

interface Equipment {
  id: string
  name: string
}

export default function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([])
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [exerciseToDelete, setExerciseToDelete] = useState<Exercise | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    muscleGroupId: '',
    equipmentId: '',
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [exercisesRes, muscleGroupsRes, equipmentRes] = await Promise.all([
        fetch('/api/exercises'),
        fetch('/api/muscle-groups'),
        fetch('/api/equipment'),
      ])
      const [exercisesData, muscleGroupsData, equipmentData] = await Promise.all([
        exercisesRes.json(),
        muscleGroupsRes.json(),
        equipmentRes.json(),
      ])
      setExercises(exercisesData)
      setMuscleGroups(muscleGroupsData)
      setEquipment(equipmentData)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const url = editingExercise 
        ? `/api/exercises?id=${editingExercise.id}`
        : '/api/exercises'
      
      const response = await fetch(url, {
        method: editingExercise ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setShowModal(false)
        setEditingExercise(null)
        fetchData()
        setFormData({ name: '', muscleGroupId: '', equipmentId: '' })
      }
    } catch (error) {
      console.error('Failed to save exercise:', error)
    }
  }

  const handleEdit = (exercise: Exercise) => {
    setEditingExercise(exercise)
    setFormData({
      name: exercise.name,
      muscleGroupId: exercise.muscleGroup.id,
      equipmentId: exercise.equipment.id,
    })
    setShowModal(true)
  }

  const handleDelete = async (exercise: Exercise) => {
    setExerciseToDelete(exercise)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = async () => {
    if (!exerciseToDelete) return

    try {
      const response = await fetch(`/api/exercises?id=${exerciseToDelete.id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Failed to delete exercise:', error)
    } finally {
      setShowDeleteConfirm(false)
      setExerciseToDelete(null)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    setEditingExercise(null)
    setFormData({ name: '', muscleGroupId: '', equipmentId: '' })
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Exercises Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FaPlus />
          <span>Add Exercise</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Muscle Group</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Equipment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{exercise.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{exercise.muscleGroup.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{exercise.equipment.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleEdit(exercise)}
                    className="text-emerald-400 hover:text-emerald-300 mr-3"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(exercise)}
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
            <h2 className="text-xl font-bold mb-4">
              {editingExercise ? 'Edit Exercise' : 'Add New Exercise'}
            </h2>
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
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Muscle Group</label>
                <select
                  value={formData.muscleGroupId}
                  onChange={(e) => setFormData({ ...formData, muscleGroupId: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select a muscle group</option>
                  {muscleGroups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Equipment</label>
                <select
                  value={formData.equipmentId}
                  onChange={(e) => setFormData({ ...formData, equipmentId: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select equipment</option>
                  {equipment.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  {editingExercise ? 'Update' : 'Create'}
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
            <p className="text-gray-300 mb-4">
              Are you sure you want to delete the exercise &quot;{exerciseToDelete?.name}&quot;?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false)
                  setExerciseToDelete(null)
                }}
                className="px-4 py-2 text-gray-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
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