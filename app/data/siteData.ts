// ─── CELESTIAL EVENTS ──────────────────────────────────────────────────────
export interface CelestialEvent {
  id: string
  title: string
  date: string          // ISO "YYYY-MM-DD"
  time?: string         // "HH:MM UTC"
  type: 'eclipse' | 'moon' | 'meteor' | 'planet' | 'comet' | 'conjunction'
  description: string
  visibility: string
  intensity: 'rare' | 'spectacular' | 'regular'
  emoji: string
}

export const celestialEvents: CelestialEvent[] = [
  {
    id: 'evt-1',
    title: 'Full Strawberry Moon',
    date: '2026-06-11',
    time: '07:44 UTC',
    type: 'moon',
    description: 'June\'s full moon, named by Native Americans after the strawberry harvest season. Rises brilliantly in the southeast.',
    visibility: 'Worldwide',
    intensity: 'regular',
    emoji: '🌕',
  },
  {
    id: 'evt-2',
    title: 'Total Lunar Eclipse',
    date: '2026-08-28',
    time: '04:13 UTC',
    type: 'eclipse',
    description: 'A spectacular total lunar eclipse (Blood Moon) visible across the Americas, Europe, and West Africa. The Moon turns deep red.',
    visibility: 'Americas · Europe · Africa',
    intensity: 'spectacular',
    emoji: '🔴',
  },
  {
    id: 'evt-3',
    title: 'Perseid Meteor Shower',
    date: '2026-08-12',
    time: 'Peak Night',
    type: 'meteor',
    description: 'One of the best annual meteor showers, producing up to 100 meteors per hour at peak. Associated with Comet Swift-Tuttle.',
    visibility: 'Northern Hemisphere',
    intensity: 'spectacular',
    emoji: '☄️',
  },
  {
    id: 'evt-4',
    title: 'Annular Solar Eclipse',
    date: '2026-02-17',
    time: '12:12 UTC',
    type: 'eclipse',
    description: 'The Moon covers the Sun\'s center, leaving a bright ring (annulus) visible. A rare "ring of fire" effect.',
    visibility: 'Antarctica · S. America',
    intensity: 'rare',
    emoji: '🌑',
  },
  {
    id: 'evt-5',
    title: 'Jupiter at Opposition',
    date: '2026-09-26',
    time: '00:00 UTC',
    type: 'planet',
    description: 'Jupiter reaches opposition — closest to Earth, fully illuminated by the Sun. Ideal time for telescopic observation of cloud bands and moons.',
    visibility: 'Worldwide',
    intensity: 'regular',
    emoji: '🪐',
  },
  {
    id: 'evt-6',
    title: 'Leonid Meteor Shower',
    date: '2026-11-17',
    time: 'Peak Night',
    type: 'meteor',
    description: 'Produced by Comet Tempel-Tuttle. Known for occasional meteor storms producing thousands per hour. Expect 10-15 meteors/hr this year.',
    visibility: 'Northern Hemisphere',
    intensity: 'regular',
    emoji: '🌠',
  },
  {
    id: 'evt-7',
    title: 'Geminid Meteor Shower',
    date: '2026-12-13',
    time: 'Peak Night',
    type: 'meteor',
    description: 'The king of meteor showers — up to 120 multicoloured meteors per hour. Unusually originates from asteroid 3200 Phaethon, not a comet.',
    visibility: 'Worldwide',
    intensity: 'spectacular',
    emoji: '✨',
  },
]

// ─── KNOWLEDGE CAPSULES ─────────────────────────────────────────────────────
export interface KnowledgeCapsule {
  id: string
  title: string
  category: 'cosmology' | 'astrophysics' | 'astronomy' | 'instruments'
  emoji: string
  color: string
  tagline: string
  body: string
  facts: string[]
  learnMore?: string
}

export const knowledgeCapsules: KnowledgeCapsule[] = [
  {
    id: 'black-hole',
    title: 'Black Holes',
    category: 'astrophysics',
    emoji: '⚫',
    color: '#7C4DFF',
    tagline: 'Where gravity wins everything',
    body: 'A black hole is a region of spacetime where gravity is so strong that nothing — not even light — can escape once it crosses the event horizon. They form when massive stars collapse at the end of their lives.',
    facts: [
      'The smallest are ~3× the Sun\'s mass',
      'Supermassive ones sit in galaxy centers',
      'Time slows near the event horizon',
      'First image captured in 2019 (M87*)',
      'Hawking radiation may slowly evaporate them',
    ],
  },
  {
    id: 'moon-craters',
    title: 'Moon Craters',
    category: 'astronomy',
    emoji: '🌑',
    color: '#4FC3F7',
    tagline: 'The Moon\'s ancient battle scars',
    body: 'Lunar craters are circular depressions formed primarily by meteorite and asteroid impacts over billions of years. Without atmosphere or weather, the Moon preserves these scars perfectly.',
    facts: [
      'Tycho crater is 85 km wide',
      'South Pole has permanently shadowed craters',
      'Ice water exists in polar craters',
      'Oldest craters are ~4.4 billion years old',
      'Apollo 11 landed near Sea of Tranquility',
    ],
  },
  {
    id: 'telescope',
    title: 'Telescopes',
    category: 'instruments',
    emoji: '🔭',
    color: '#FFB300',
    tagline: 'Humanity\'s window to the cosmos',
    body: 'Telescopes collect and focus light (or other radiation) to observe distant objects. From Galileo\'s refractor in 1609 to the James Webb Space Telescope, they have transformed our understanding of the universe.',
    facts: [
      'JWST can see 13.6 billion light-years away',
      'Radio telescopes detect invisible waves',
      'Hubble orbits at 547 km altitude',
      'Aperture determines light-gathering power',
      'Adaptive optics corrects atmospheric blur',
    ],
  },
  {
    id: 'dark-matter',
    title: 'Dark Matter',
    category: 'cosmology',
    emoji: '🌌',
    color: '#F06292',
    tagline: '27% of the universe, yet invisible',
    body: 'Dark matter is an invisible form of matter that does not interact with electromagnetic force — so it doesn\'t emit, absorb or reflect light. We know it exists only through its gravitational effects.',
    facts: [
      'Makes up ~27% of the universe',
      'Never directly detected yet',
      'Holds galaxies from flying apart',
      'WIMPs are the leading candidate particle',
      'Dark energy makes up another 68%',
    ],
  },
  {
    id: 'neutron-star',
    title: 'Neutron Stars',
    category: 'astrophysics',
    emoji: '💫',
    color: '#00E5FF',
    tagline: 'A teaspoon weighs a billion tons',
    body: 'Neutron stars are incredibly dense remnants of massive stars after supernova explosions. They are roughly 20 km in diameter but contain more mass than the Sun.',
    facts: [
      'Density: ~10¹⁷ kg/m³',
      'Surface gravity is 2×10¹¹ times Earth\'s',
      'Pulsars are rotating neutron stars',
      'Merge to form gravitational waves',
      'Temperature: ~10⁶ Kelvin at surface',
    ],
  },
  {
    id: 'big-bang',
    title: 'The Big Bang',
    category: 'cosmology',
    emoji: '🔆',
    color: '#FF8F00',
    tagline: 'The birth of space, time and everything',
    body: 'The Big Bang describes how the universe expanded from an extremely hot, dense initial state ~13.8 billion years ago. It wasn\'t an explosion in space — it was an expansion of space itself.',
    facts: [
      'Occurred 13.8 billion years ago',
      'Universe was smaller than an atom at t=0',
      'CMB radiation is its "echo"',
      'First atoms formed 380,000 years later',
      'Expansion is still accelerating today',
    ],
  },
]

// ─── JOURNEY ────────────────────────────────────────────────────────────────
export interface JourneyEntry {
  id: string
  year: string
  title: string
  description: string
  emoji: string
  tags: string[]
}

export const journeyEntries: JourneyEntry[] = [
  {
    id: 'j1',
    year: '2015',
    title: 'First Look at the Night Sky',
    description: 'During a trip to rural Maharashtra, away from city lights, I saw the Milky Way with naked eye for the first time. That moment changed everything — I had to understand what I was looking at.',
    emoji: '🌌',
    tags: ['Milky Way', 'Naked Eye', 'First Experience'],
  },
  {
    id: 'j2',
    year: '2018',
    title: 'Discovering Astrophysics',
    description: 'Started deep-diving into physics — special relativity, general relativity, quantum mechanics. Michio Kaku\'s "Hyperspace" was my gateway book. The universe became even more mind-bending.',
    emoji: '📚',
    tags: ['Books', 'Relativity', 'Quantum', 'Self-study'],
  },
  {
    id: 'j3',
    year: '2020',
    title: 'Comet NEOWISE Sighting',
    description: 'Witnessed Comet NEOWISE — the brightest comet visible from the northern hemisphere in over 20 years. Photographed it from Pune rooftop with a DSLR. My first real astrophotography attempt.',
    emoji: '☄️',
    tags: ['NEOWISE', 'Astrophotography', 'Comet'],
  },
  {
    id: 'j4',
    year: '2022',
    title: 'JWST First Images',
    description: 'The James Webb Space Telescope released its first deep field images. Thousands of galaxies in a patch of sky the size of a grain of sand. I stared at that image for hours. Pure awe.',
    emoji: '🔭',
    tags: ['JWST', 'Deep Field', 'Galaxies'],
  },
  {
    id: 'j5',
    year: '2024',
    title: 'Code Meets Cosmos',
    description: 'Started combining my software engineering skills with space science. Built orbital simulators, star map generators, and this very site. Code becomes more meaningful when it simulates the universe.',
    emoji: '💻',
    tags: ['Coding', 'Simulation', 'JavaScript'],
  },
]

// ─── GALLERY SHOTS ───────────────────────────────────────────────────────────
export interface GalleryShot {
  id: string
  title: string
  description: string
  scienceFact: string
  location: string
  date: string
  tags: string[]
  gradient: string
  emoji: string
}

export const galleryShots: GalleryShot[] = [
  {
    id: 'g1',
    title: 'Orion Nebula — M42',
    description: 'A stellar nursery 1,344 light-years from Earth in Orion\'s sword. Visible to the naked eye as a fuzzy star.',
    scienceFact: 'Over 700 stars are forming inside M42 right now. It contains enough gas to form 10,000 Sun-like stars.',
    location: 'Pune, Maharashtra',
    date: 'Jan 2024',
    tags: ['Nebula', 'Orion', 'DSLR', 'Long Exposure'],
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #c0392b 100%)',
    emoji: '🌟',
  },
  {
    id: 'g2',
    title: 'Moon — Terminator Line',
    description: 'The lunar terminator is the boundary between day and night on the Moon, where craters cast dramatic long shadows.',
    scienceFact: 'The terminator line is the best time to observe craters — shadows create 3D relief at low sun angles.',
    location: 'Khopoli, Maharashtra',
    date: 'Mar 2024',
    tags: ['Moon', 'Craters', 'Telephoto', 'Details'],
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a2a4a 50%, #4a6a8a 100%)',
    emoji: '🌕',
  },
  {
    id: 'g3',
    title: 'Milky Way Core',
    description: 'The galactic center rising above Sahyadri hills. Shot during new moon for maximum darkness.',
    scienceFact: 'The bright center is 26,000 light-years away. A supermassive black hole, Sagittarius A*, lurks at its heart.',
    location: 'Sahyadri Range, Maharashtra',
    date: 'May 2024',
    tags: ['Milky Way', 'Galactic Center', 'Wide Angle', 'Nightscape'],
    gradient: 'linear-gradient(135deg, #000510 0%, #0a1a3a 40%, #1a0a3a 70%, #3a1a5a 100%)',
    emoji: '🌌',
  },
  {
    id: 'g4',
    title: 'ISS Transit',
    description: 'The International Space Station crossing the face of the half-moon in under 0.6 seconds. Required precise planning.',
    scienceFact: 'The ISS orbits at 408 km altitude, completing 15.5 orbits per day at 28,000 km/h.',
    location: 'Pune, Maharashtra',
    date: 'Aug 2024',
    tags: ['ISS', 'Transit', 'Planning', 'Rare Shot'],
    gradient: 'linear-gradient(135deg, #020510 0%, #0a1428 50%, #1a2a4a 100%)',
    emoji: '🛸',
  },
]

// ─── BLOGS ──────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: 'cosmos' | 'learning' | 'photography'
  tags: string[]
  emoji: string
  color: string
  comingSoon?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why the Night Sky Makes Me a Better Software Engineer',
    excerpt: 'Sitting under the stars doesn\'t just inspire wonder — it reshapes how I think about systems, scale, and complexity. Here\'s the connection I\'ve found between distributed systems and cosmological structures.',
    date: '2025-03-15',
    readTime: '6 min',
    category: 'cosmos',
    tags: ['Perspective', 'Software', 'Systems Thinking'],
    emoji: '💡',
    color: '#4FC3F7',
  },
  {
    id: 'b2',
    title: 'My First Milky Way Shot — Everything That Went Wrong',
    excerpt: 'Dew on the lens. Wrong white balance. A car drove through at 2 AM. Planning a Milky Way shoot sounds romantic until you\'re in the field. Here\'s what I learned the hard way.',
    date: '2025-05-01',
    readTime: '8 min',
    category: 'photography',
    tags: ['Astrophotography', 'Lessons', 'Milky Way'],
    emoji: '📷',
    color: '#FFB300',
  },
  {
    id: 'b3',
    title: 'General Relativity — What Einstein Actually Said',
    excerpt: 'Most explanations are either too simple (bowling ball on a fabric) or too mathematical. I\'ll walk through the core intuition in a way that actually satisfies a curious mind.',
    date: '2025-06-10',
    readTime: '10 min',
    category: 'learning',
    tags: ['Einstein', 'GR', 'Spacetime', 'Physics'],
    emoji: '🧠',
    color: '#7C4DFF',
  },
  {
    id: 'b4',
    title: 'Black Holes and Microservices — Surprising Parallels',
    excerpt: 'Event horizons, information paradoxes, and singularities — black holes share surprising structural parallels with distributed system architecture. A fun cross-domain exploration.',
    date: '',
    readTime: '7 min',
    category: 'cosmos',
    tags: ['Black Holes', 'Distributed Systems', 'Fun'],
    emoji: '⚫',
    color: '#F06292',
    comingSoon: true,
  },
]
