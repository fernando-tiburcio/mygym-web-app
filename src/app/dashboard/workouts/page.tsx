'use client'

import { useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa'

interface Workout {
  id: string
  name: string
  active: boolean
  created_at: string
  user: {
    id: string
    name: string
    email: string
  }
  workoutDetails: {
    id: string
    name: string
    repetitions: number
    series: number
    description: string
    details: string
    rest: number
    exercise: {
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
  }[]
}

interface User {
  id: string
  name: string
  email: string
}

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

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editWorkoutId, setEditWorkoutId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    active: true,
    workoutDetails: [
      {
        exerciseId: '',
        repetitions: 12,
        series: 3,
        description: '',
        details: '',
        rest: 30,
      },
    ],
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    console.log('fetching data')
    try {
      const [workoutsRes, usersRes, exercisesRes] = await Promise.all([
        fetch('/api/workouts'),
        fetch('/api/users'),
        fetch('/api/exercises'),
      ])
      const [workoutsData, usersData, exercisesData] = await Promise.all([
        workoutsRes.json(),
        usersRes.json(),
        exercisesRes.json(),
      ])
      console.log(workoutsData)
      setWorkouts(workoutsData)
      setUsers(usersData)
      setExercises(exercisesData)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isEditMode && editWorkoutId) {
        const response = await fetch(`/api/workouts?id=${editWorkoutId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          setShowModal(false)
          setIsEditMode(false)
          setEditWorkoutId(null)
          fetchData()
          resetFormData()
        }
      } else {
        const response = await fetch('/api/workouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          setShowModal(false)
          fetchData()
          resetFormData()
        }
      }
    } catch (error) {
      console.error(`Failed to ${isEditMode ? 'update' : 'create'} workout:`, error)
    }
  }

  const resetFormData = () => {
    setFormData({
      name: '',
      userId: '',
      active: true,
      workoutDetails: [
        {
          exerciseId: '',
          repetitions: 12,
          series: 3,
          description: '',
          details: '',
          rest: 30,
        },
      ],
    })
  }

  const handleEdit = (workout: Workout) => {
    // Prepare form data for editing
    const workoutDetailsForEdit = workout.workoutDetails.map(detail => ({
      exerciseId: detail.exercise.id,
      repetitions: detail.repetitions,
      series: detail.series,
      description: detail.description || '',
      details: detail.details || '',
      rest: detail.rest,
    }))

    setFormData({
      name: workout.name,
      userId: workout.user.id,
      active: workout.active,
      workoutDetails: workoutDetailsForEdit,
    })
    
    setIsEditMode(true)
    setEditWorkoutId(workout.id)
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this workout?')) {
      try {
        const response = await fetch(`/api/workouts?id=${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          fetchData()
        } else {
          console.error('Failed to delete workout')
        }
      } catch (error) {
        console.error('Error deleting workout:', error)
      }
    }
  }

  const addExercise = () => {
    setFormData({
      ...formData,
      workoutDetails: [
        ...formData.workoutDetails,
        {
          exerciseId: '',
          repetitions: 12,
          series: 3,
          description: '',
          details: '',
          rest: 30,
        },
      ],
    })
  }

  const removeExercise = (index: number) => {
    setFormData({
      ...formData,
      workoutDetails: formData.workoutDetails.filter((_, i) => i !== index),
    })
  }

  const updateExercise = (index: number, field: string, value: string | number) => {
    const newWorkoutDetails = [...formData.workoutDetails]
    newWorkoutDetails[index] = {
      ...newWorkoutDetails[index],
      [field]: value,
    }
    setFormData({
      ...formData,
      workoutDetails: newWorkoutDetails,
    })
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Workouts Management</h1>
        <button
          onClick={() => {
            resetFormData()
            setIsEditMode(false)
            setEditWorkoutId(null)
            setShowModal(true)
          }}
          className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FaPlus />
          <span>Add Workout</span>
        </button>
      </div>

      <div className="space-y-4">
        {workouts.map((workout) => (
          <div key={workout.id} className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white">{workout.name}</h2>
                <p className="text-sm text-gray-400">
                  Created on {new Date(workout.created_at).toLocaleDateString()} for {workout.user.name}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  workout.active ? 'bg-emerald-500' : 'bg-red-500'
                } text-white`}
              >
                {workout.active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="space-y-4">
              {workout.workoutDetails.map((detail) => (
                <div key={detail.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-white">{detail.name}</h3>
                      <p className="text-sm text-gray-300">{detail.exercise.name}</p>
                      <p className="text-sm text-gray-400">
                        {detail.series} sets × {detail.repetitions} reps
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(workout)}
                        className="text-emerald-400 hover:text-emerald-300"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDelete(workout.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  {detail.description && (
                    <p className="mt-2 text-sm text-gray-300">{detail.description}</p>
                  )}
                  {detail.details && (
                    <p className="mt-1 text-sm text-gray-400">{detail.details}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-400">Rest: {detail.rest} seconds</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{isEditMode ? 'Edit Workout' : 'Add New Workout'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-sm font-medium text-gray-300 mb-1">User</label>
                <select
                  value={formData.userId}
                  onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select a user</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name} ({user.email})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="active" className="text-sm font-medium text-gray-300">Active</label>
              </div>

              <div className="space-y-4">
                {formData.workoutDetails.map((detail, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium text-white">Exercise {index + 1}</h3>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeExercise(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <FaTimes />
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Exercise</label>
                        <select
                          value={detail.exerciseId}
                          onChange={(e) => updateExercise(index, 'exerciseId', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          required
                        >
                          <option value="">Select an exercise</option>
                          {exercises.map((exercise) => (
                            <option key={exercise.id} value={exercise.id}>
                              {exercise.name} ({exercise.muscleGroup.name} - {exercise.equipment.name})
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Repetitions</label>
                          <input
                            type="number"
                            value={detail.repetitions}
                            onChange={(e) => updateExercise(index, 'repetitions', parseInt(e.target.value))}
                            className="w-full px-3 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Series</label>
                          <input
                            type="number"
                            value={detail.series}
                            onChange={(e) => updateExercise(index, 'series', parseInt(e.target.value))}
                            className="w-full px-3 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea
                          value={detail.description}
                          onChange={(e) => updateExercise(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Details</label>
                        <textarea
                          value={detail.details}
                          onChange={(e) => updateExercise(index, 'details', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Rest (seconds)</label>
                        <input
                          type="number"
                          value={detail.rest}
                          onChange={(e) => updateExercise(index, 'rest', parseInt(e.target.value))}
                          className="w-full px-3 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addExercise}
                  className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300"
                >
                  <FaPlus />
                  <span>Add Another Exercise</span>
                </button>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  {isEditMode ? 'Update Workout' : 'Create Workout'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 