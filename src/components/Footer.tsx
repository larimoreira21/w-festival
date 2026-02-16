import logo from '../assets/logo.png';
import apple from '../assets/social-media/apple.png';
import tiktok from '../assets/social-media/tiktok.svg';
import twitter from '../assets/social-media/twitter.svg';
import youtube from '../assets/social-media/youtube.svg';
import facebook from '../assets/social-media/facebook.svg';
import linkedin from '../assets/social-media/linkedin.svg';
import instagram from '../assets/social-media/instagram.svg';
import googlePlay from '../assets/social-media/google-play.png';

const socialMedia = [
  { name: 'youtube', url: youtube },
  { name: 'linkedin', url: linkedin },
  { name: 'instagram', url: instagram },
  { name: 'facebook', url: facebook },
  { name: 'tiktok', url: tiktok },
  { name: 'twitter', url: twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-8 mb-8">
      <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between gap-10 px-4 sm:px-6 lg:px-8 py-6">
        <div>
          <p className="text-xs leading-relaxed mb-8 max-w-4xl">
            Seek the Festival Guidance Rating. All rights reserved. May is used
            under license. All rights reserved. By attending, Music Festi under
            license. The trademarks GLOBON, TV GLOBON, GLOBO NOVEN, CANAL,
            BRASIL, SPORTIFY, MULTISHOW, GNT6, QUITE, BIS6, GLOBOBNEWS, GLOBE,
            VIVAH, MODO MAGAZINE, PREMIERE6, and COMBATS are properties of Globo
            Corporation. All rights reserved. The brands, Build Universal, and
            CBS trademarks are property of their respective owners. Paramount.
            All rights reserved.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {socialMedia.map((media) => (
                <button
                  key={media.name}
                  aria-label={media.name}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={media.url}
                    alt={media.name}
                    className="h-6 object-contain"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <button className="hover:text-orange-500">
                About Labs Festival
              </button>
              <button className="hover:text-orange-500">
                Terms of use and privacy
              </button>
              <button className="hover:text-orange-500">Send feedback</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-4 mt-1">
          <img src={logo} alt="logo" className="w-[160px]" />

          <p className="text-xs">2024 Watch Brasil. All rights reserved</p>

          <div className="flex items-center gap-3 mt-2">
            <button>
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-[134px] h-[40px] object-contain"
              />
            </button>

            <button>
              <img
                src={apple}
                alt="Apple"
                className="w-[134px] h-[40px] object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
