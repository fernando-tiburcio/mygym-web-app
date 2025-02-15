import Link from 'next/link';
import { HomeIcon, DumbbellIcon, UsersIcon, ClipboardIcon } from 'lucide-react';

const SideMenu = () => {
  const menuItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Workouts', href: '/workouts', icon: DumbbellIcon },
    { name: 'Users', href: '/users', icon: UsersIcon },
    { name: 'Equipments', href: '/equipments', icon: ClipboardIcon },
  ];

  return (
    <aside className="w-64 min-h-screen bg-background border-r border-background px-3 py-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 text-foreground rounded-lg hover:bg-background transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideMenu; 