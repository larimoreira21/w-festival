export const colors = {
  accent: '#E96744',
  accentHover: '#FF2828',
  background: '#0aA0A0A',
  foreground: '#F5F5F5',
  border: '#292929',
  card: '#141414',
  cardDark: '#1A1A1A',
  live: '#FF6347',
  muted: '#636363',
  white: '#FFFFFF',
  sponsor: {
    heineken: '#008234',
    cocacola: '#550C37',
  },
} as const;

export type ColorToken = keyof typeof colors;
