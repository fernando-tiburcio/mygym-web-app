import { FaUsers, FaDumbbell, FaRunning, FaTools, FaClipboardList } from 'react-icons/fa'

const stats = [
  { name: 'Total Users', value: '0', icon: FaUsers, color: 'text-blue-500' },
  { name: 'Muscle Groups', value: '0', icon: FaDumbbell, color: 'text-emerald-500' },
  { name: 'Exercises', value: '0', icon: FaRunning, color: 'text-purple-500' },
  { name: 'Equipment', value: '0', icon: FaTools, color: 'text-yellow-500' },
  { name: 'Workouts', value: '0', icon: FaClipboardList, color: 'text-red-500' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
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
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="rounded-lg bg-gray-800 p-6">
          <p className="text-gray-400">No recent activity to show</p>
        </div>
      </div>
    </div>
  )
} 