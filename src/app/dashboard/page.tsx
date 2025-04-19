import { FaUsers, FaDumbbell, FaRunning, FaTools, FaClipboardList } from 'react-icons/fa'
import prisma from '@/lib/prisma'

const stats = [
  { name: 'Total de Usuários', value: '0', icon: FaUsers, color: 'text-blue-500' },
  { name: 'Grupos Musculares', value: '0', icon: FaDumbbell, color: 'text-emerald-500' },
  { name: 'Exercícios', value: '0', icon: FaRunning, color: 'text-purple-500' },
  { name: 'Equipamentos', value: '0', icon: FaTools, color: 'text-yellow-500' },
  { name: 'Treinos', value: '0', icon: FaClipboardList, color: 'text-red-500' },
]

async function getStats() {
  const [
    usersCount,
    muscleGroupsCount,
    exercisesCount,
    equipmentCount,
    workoutsCount
  ] = await Promise.all([
    prisma.user.count(),
    prisma.muscleGroup.count(),
    prisma.exercise.count(),
    prisma.equipment.count(),
    prisma.workout.count()
  ])

  return {
    usersCount,
    muscleGroupsCount,
    exercisesCount,
    equipmentCount,
    workoutsCount
  }
}

export default async function DashboardPage() {
  const statsData = await getStats()

  const statsWithData = [
    { ...stats[0], value: statsData.usersCount.toString() },
    { ...stats[1], value: statsData.muscleGroupsCount.toString() },
    { ...stats[2], value: statsData.exercisesCount.toString() },
    { ...stats[3], value: statsData.equipmentCount.toString() },
    { ...stats[4], value: statsData.workoutsCount.toString() }
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Visão Geral do Painel</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {statsWithData.map((stat) => (
          <div
            key={stat.name}
            className="rounded-lg bg-gray-800 p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className={`rounded-full bg-gray-700 p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
        <div className="rounded-lg bg-gray-800 p-6">
          <p className="text-gray-400">Nenhuma atividade recente para mostrar</p>
        </div>
      </div>
    </div>
  )
} 