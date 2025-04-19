'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaUsers, 
  FaDumbbell, 
  FaRunning, 
  FaTools, 
  FaClipboardList,
  FaHome 
} from 'react-icons/fa'

const navigation = [
  { name: 'Painel', href: '/dashboard', icon: FaHome },
  { name: 'Usuários', href: '/dashboard/users', icon: FaUsers },
  { name: 'Grupos Musculares', href: '/dashboard/muscle-groups', icon: FaDumbbell },
  { name: 'Exercícios', href: '/dashboard/exercises', icon: FaRunning },
  { name: 'Tipos de Equipamentos', href: '/dashboard/equipment-types', icon: FaTools },
  { name: 'Equipamentos', href: '/dashboard/equipment', icon: FaTools },
  { name: 'Treinos', href: '/dashboard/workouts', icon: FaClipboardList },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-800">
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <h1 className="text-xl font-bold text-emerald-400">Painel da Academia</h1>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 