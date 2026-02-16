import { useState, useRef, useEffect } from 'react';
import { User, Settings } from 'lucide-react';

type ProfileDropdownProps = {
  name: string;
};

export default function ProfileDropdown({ name }: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative hidden sm:flex">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full px-3 py-1.5 group hover:bg-white/10 transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white">
          <User className="w-4 h-4" />
        </div>

        <span className="text-sm text-white font-medium group-hover:text-orange-500 transition-colors">
          {name}
        </span>

        <Settings
          className={`w-4 h-4 text-white group-hover:text-orange-500 transition-transform ${
            open ? 'rotate-90' : ''
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-full bg-[#1E1E22] text-white shadow-lg overflow-hidden z-50">
          <button className="w-full text-left font-bold px-4 py-2 hover:bg-white/10">
            My profile
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-white/10">
            Help
          </button>
        </div>
      )}
    </div>
  );
}
