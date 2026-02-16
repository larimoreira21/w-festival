import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type SelectButtonProps = {
  label: string;
  options: string[];
  icon?: ReactNode;
  optionsTitle?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function SelectButton({
  label,
  options,
  icon,
  optionsTitle,
  onChange,
  className = '',
}: SelectButtonProps) {
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
    <div ref={ref} className={`relative flex ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="group px-3 py-1.5 flex items-center gap-1 text-white font-medium hover:text-orange-500 transition-colors"
      >
        {icon && <span className="shrink-0 w-4 h-4">{icon}</span>}
        <span>{label}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-full bg-[#1E1E22] text-white shadow-lg overflow-hidden z-50">
          {optionsTitle && (
            <div className="px-4 py-2 mt-4 font-bold disabled:opacity-50 disabled:cursor-not-allowed">
              {optionsTitle}
            </div>
          )}

          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange?.(opt);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-white/10 cursor-pointer whitespace-nowrap"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
