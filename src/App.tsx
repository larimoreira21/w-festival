import './index.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LineUpSection } from './components/LineUpSection';
import { GenresSection } from './components/GenresSection';
import { SponsorBanner } from './components/SponsorBanner';

import alok from './assets/card-alok.png';
import avril from './assets/card-avril.png';
import ritaOra from './assets/card-rita.png';
import duaLipa from './assets/card-dualipa.png';
import cocacola from './assets/ads/coca-cola.png';
import heineken from './assets/ads/heineken.png';
import maneskin from './assets/card-maneskin.png';
import coldplay from './assets/card-coldplay.png';
import dreamTheater from './assets/card-dream.png';
import offspring from './assets/card-offspring.png';
import marshmello from './assets/card-marshmello.png';
import ironMaiden from './assets/card-ironmaiden.png';
import blackPantera from './assets/card-blackpanthera.png';

const artistsLineUp = [
  { name: 'Iron Maiden', image: ironMaiden },
  { name: 'Alok', image: alok },
  { name: 'Rita Ora', image: ritaOra },
  { name: 'Dream Theater', image: dreamTheater },
];

const artistYesterday = [
  { name: 'Marshmello', image: marshmello },
  { name: 'Alok', image: alok },
  { name: 'Rita Ora', image: ritaOra },
  { name: 'Dream Theater', image: dreamTheater },
  { name: 'Dua Lipa', image: duaLipa },
  { name: 'Maneskin', image: maneskin },
];

const artistRockSingers = [
  { name: 'Dream', image: dreamTheater },
  { name: 'Maneskin', image: maneskin },
  { name: 'Coldplay', image: coldplay },
  { name: 'Offspring', image: offspring },
  { name: 'Avril', image: avril },
  { name: 'Black Pantera', image: blackPantera },
];

const artistWatch = [
  { name: 'Alok', image: alok },
  { name: 'Rita oRA', image: ritaOra },
  { name: 'Dua Lipa', image: duaLipa },
  { name: 'Maneskin', image: maneskin },
];

const firstBanner = [
  {
    image: heineken,
    title: 'Premium Lager',
    buttonText: 'Get a taste of Amsterdam',
    brandColor: '#008234',
  },
  {
    image: cocacola,
    title: 'Next Generation',
    buttonText: 'Explore Now',
    brandColor: '#550C37',
  },
];

const secondBanner = [
  {
    image: cocacola,
    title: 'Next Generation',
    buttonText: 'Explore Now',
    brandColor: '#550C37',
  },
  {
    image: heineken,
    title: 'Premium Lager',
    buttonText: 'Get a taste of Amsterdam',
    brandColor: '#008234',
  },
];

function App() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="pt-14 w-full">
        <LineUpSection artists={artistsLineUp} hasSponsor title="Line Up" />

        <GenresSection />

        <SponsorBanner bannerData={firstBanner} />

        <LineUpSection
          artists={artistYesterday}
          hasSponsor={false}
          title="Yesterday Shows"
        />

        <LineUpSection
          artists={artistRockSingers}
          hasSponsor={false}
          title="Rock Singers"
        />

        <SponsorBanner bannerData={secondBanner} />

        <LineUpSection artists={artistWatch} hasSponsor title="Watch Again" />

        <Footer />
      </div>
    </main>
  );
}

export default App;
