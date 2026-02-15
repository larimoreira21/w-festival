import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface bannerData {
  image: string;
  title: string;
  buttonText: string;
  brandColor: string;
}

interface sponsorData {
  bannerData: bannerData[];
}

export function SponsorBanner({ bannerData }: sponsorData) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === bannerData.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentBanner = bannerData[currentIndex];

  return (
    <section className="mx-3 sm:mx-4 lg:mx-8 my-6 sm:my-8 rounded-xl overflow-hidden bg-white relative group h-[250px] sm:h-[300px] lg:h-[350px]">
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 p-[32px] transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      ))}

      <div className="relative z-20 h-full w-full flex flex-col items-end justify-end p-6 sm:p-10 lg:p-12 pointer-events-none">
        <button
          style={{ backgroundColor: currentBanner.brandColor }}
          className="text-white px-6 py-2.5 rounded-sm text-xs sm:text-sm font-bold flex items-center gap-3 transition-all pointer-events-auto uppercase tracking-wider hover:brightness-110 active:scale-95"
        >
          {currentBanner.buttonText} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full border-0 block cursor-pointer transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            style={{
              padding: 0,
              backgroundColor: index === currentIndex ? '#636363' : 'white',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
