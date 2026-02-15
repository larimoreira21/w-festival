import { useState } from 'react';
import {
  ChevronDown,
  Home,
  Menu,
  RadioTower,
  Settings,
  User,
  X,
} from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  border-b border-transparent  py-1">
      <div className="flex items-center justify-between px-4 lg:px-8 h-12 sm:h-14 max-w-[1440px] mx-auto">
        <div className="flex items-center shrink-0">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 sm:w-40" />
          </a>
        </div>

        <nav className="hidden md:flex flex-row items-center gap-1 mt-4">
          <a
            href="#"
            className="group px-3 py-1.5 flex items-center gap-2 hover:text-orange-500"
          >
            <Home className="w-4 h-4 text-white group-hover:text-orange-500 transition-colors" />
            <span className="text-white font-medium group-hover:text-orange-500 transition-colors">
              Home
            </span>
          </a>

          <a
            href="#"
            className="group px-3 py-1.5 flex items-center gap-2 hover:text-orange-500"
          >
            <RadioTower className="w-4 h-4 text-white group-hover:text-orange-500 transition-colors" />
            <span className="text-white font-medium group-hover:text-orange-500 transition-colors">
              Live
            </span>
          </a>

          <button className="px-3 py-1.5 text-sm text-white flex items-center gap-1 hover:text-orange-500 transition-colors">
            <span>Musical Styles</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          <button className="px-3 py-1.5 text-sm text-white flex items-center gap-1 hover:text-orange-500 transition-colors">
            <span>Exclusive Content</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </nav>

        <div className="flex items-center gap-3 mt-4">
          <div className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 cursor-pointer group hover:bg-white/10 transition-colors">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm text-white font-medium group-hover:text-orange-500 transition-colors">
              Peter Parker
            </span>
            <Settings className="w-4 h-4 text-white group-hover:text-orange-500 transition-colors" />
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-6 flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors"
          >
            <RadioTower className="w-5 h-5" />
            <span className="font-medium">Live</span>
          </a>
          <button className="text-white hover:text-primary transition-colors justify-start">
            Musical Styles
          </button>
          <button className="text-white hover:text-primary transition-colors justify-start">
            Exclusive Content
          </button>
        </nav>
      )}
    </header>
  );
}
