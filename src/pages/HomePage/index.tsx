import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import { LivePlayer } from './components/LivePlayer';
import { LiveSection } from './components/LiveSection';
import { LineUpSection } from './components/LineUpSection';
import { GenresSection } from './components/GenresSection';
import { SponsorBanner } from './components/SponsorBanner';
import { ExclusiveContent } from './components/ExclusiveContent';

import {
  artistsLineUp,
  artistYesterday,
  artistRockSingers,
  artistWatch,
  firstBanner,
  secondBanner,
} from './helpers';

function HomePage() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="pt-17 w-full bg-[#1E1E22]">
        <LivePlayer />

        <LineUpSection artists={artistsLineUp} hasSponsor title="Line Up" />

        <GenresSection />

        <SponsorBanner bannerData={firstBanner} />

        <LiveSection />

        <LineUpSection
          artists={artistYesterday}
          hasSponsor={false}
          title="Yesterday Shows"
        />

        <ExclusiveContent />

        <LineUpSection
          artists={artistRockSingers}
          hasSponsor={false}
          title="Rock Singers"
        />

        <SponsorBanner bannerData={secondBanner} />

        <LineUpSection artists={artistWatch} hasSponsor title="Watch Again" />
      </div>

      <div className="bg-[#1E1E22]">
        <Footer />
      </div>
    </main>
  );
}

export default HomePage;
