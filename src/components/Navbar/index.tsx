import { useState } from 'react';
import { AudioLines, Home, Menu, RadioTower, Sparkles, X } from 'lucide-react';

import logo from '../../assets/logo.png';
import SelectButton from './components/SelectButton';
import ProfileDropdown from './components/ProfileButton';

export function Navbar() {
  const musicalStyles = ['Rock', 'Pop', 'Funk', 'MBP', 'Jazz', 'Trap', 'Rap'];
  const exclusiveContent = [
    'Back Stage',
    'Interviews',
    'Latest News',
    'Last editions',
    'Watch Again',
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const navigateTo = (value: string) => {
    console.log('navigating to', value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-transparent backdrop-blur">
      <div className="flex items-center justify-between md:justify-start flex-nowrap px-4 lg:px-4 h-12 sm:h-[64px]">
        <div className="flex items-center shrink-0 mr-8">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 sm:w-40" />
          </a>
        </div>

        <div className="flex justify-between md:w-full">
          <nav className="hidden md:flex flex-row items-center gap-1 mt-6">
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

            <SelectButton
              label="Musical Styles"
              options={musicalStyles}
              optionsTitle="Styles:"
              icon={<AudioLines className="w-4 h-4" />}
              onChange={(value) => navigateTo(value)}
            />

            <SelectButton
              label="Exclusive Content"
              options={exclusiveContent}
              optionsTitle="Exclusive Content:"
              icon={<Sparkles className="w-4 h-4" />}
              onChange={(value) => navigateTo(value)}
            />
          </nav>

          <div className="flex items-center mt-2">
            <ProfileDropdown name="Peter Parker" />

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
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-[#1E1E22] px-4 py-6 flex flex-col gap-4">
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

          <button className="flex items-center gap-3 text-white hover:text-primary transition-colors justify-start">
            <AudioLines className="w-5 h-5" />
            <span className="font-medium">Musical Styles</span>
          </button>

          <button className="flex items-center gap-3 text-white hover:text-primary transition-colors justify-start">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Exclusive Content</span>
          </button>
        </nav>
      )}
    </header>
  );
}
