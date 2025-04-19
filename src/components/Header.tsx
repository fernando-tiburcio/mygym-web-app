import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-background bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - App Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground">
              My Gym Web App
            </Link>
          </div>

          {/* Right side - User Info */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">John Doe</span>
              <span className="text-sm text-foreground">john@example.com</span>
            </div>
            <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-background">
              <Image
                src="https://www.github.com/fernando-tiburcio.png"
                alt="User avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 