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
  content?: BlogSection[]
}

export interface BlogSection {
  type: 'intro' | 'heading' | 'para' | 'quote' | 'list' | 'divider' | 'callout'
  text?: string
  items?: string[]
  label?: string
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
    content: [
      { type: 'intro', text: 'There is a moment — usually around 1 AM, lying on a rooftop somewhere far from city lights — when the universe stops being abstract and becomes viscerally real. The scale of it. The silence. The fact that the photons hitting your eyes left some of those stars thousands of years ago. It\'s disorienting in the best way. And slowly, over years of stargazing, I realized that feeling was changing how I think as an engineer.' },
      { type: 'heading', text: 'Scale Breaks Your Assumptions' },
      { type: 'para', text: 'In software, we talk about scale constantly. Millions of users. Terabytes of data. Thousands of requests per second. And yet the scale feels manageable — it\'s numbers on a dashboard. Astronomy forces you to internalize scale in a way that no monitoring tool can.' },
      { type: 'para', text: 'The observable universe is 93 billion light-years across. The nearest star is 4.2 light-years away — a distance so vast that if you travelled at the speed of our fastest spacecraft, you\'d arrive in roughly 76,000 years. When you genuinely sit with that, something shifts in how you think about system design. You stop assuming your mental model is complete. You stop assuming the edge cases you\'ve thought of are all the edge cases that exist.' },
      { type: 'quote', text: 'The universe is not only queerer than we suppose, but queerer than we can suppose.', label: '— J.B.S. Haldane' },
      { type: 'heading', text: 'Distributed Systems and Cosmic Structures' },
      { type: 'para', text: 'The more I studied astrophysics, the more I saw familiar patterns. Galaxies are not uniform blobs of stars — they\'re structured systems with dense cores, spiral arms, and vast empty voids between them. The cosmic web, the large-scale structure of the universe, looks remarkably like a distributed system: dense nodes connected by filaments, with enormous empty spaces in between.' },
      { type: 'para', text: 'Microservices, event-driven architecture, API gateways — these are just human attempts to organize complexity the way nature does. Clusters of responsibility, message passing between them, eventual consistency across the whole. When I look at a system architecture diagram now, I sometimes see galaxies.' },
      { type: 'callout', label: 'The Parallel', text: 'A galaxy cluster and a microservices mesh both solve the same fundamental problem: how do you maintain coherence across a massively distributed system where no single node has the full picture?' },
      { type: 'heading', text: 'Embracing Uncertainty' },
      { type: 'para', text: 'Here\'s something that took me a long time to accept as an engineer: uncertainty is not a problem to be solved. It\'s a property of complex systems to be managed. Astronomy taught me this. We don\'t know what dark matter is. We don\'t fully understand what happens inside a black hole. We have theories, models, and evidence — but not certainty.' },
      { type: 'para', text: 'The best astrophysicists I\'ve read aren\'t paralyzed by what they don\'t know. They build the best model they can with available data, make predictions, test them, and update. Sound familiar? That\'s just good engineering.' },
      { type: 'list', items: [
        'You don\'t need to understand everything before you build something useful',
        'Observability matters — if you can\'t measure it, you can\'t reason about it',
        'Emergent complexity is real — simple rules produce behaviours no one designed',
        'Humility about your models is a professional skill, not a weakness',
      ]},
      { type: 'heading', text: 'The Slowness Is the Point' },
      { type: 'para', text: 'Software moves fast. Deploy on Friday. Ship the feature. Iterate in two-week sprints. Astronomy moves at a completely different pace. Some phenomena take millions of years to unfold. A pulsar spins down by a few microseconds per year. A stellar nursery takes 10 million years to form stars.' },
      { type: 'para', text: 'Spending time with that slowness recalibrates something in me. It reminds me that not everything needs to ship this sprint. Some of the most important things — a deep technical foundation, a well-understood domain, genuine expertise — take years to build. The universe isn\'t in a hurry. On a good night, under a dark sky, neither am I.' },
      { type: 'divider' },
      { type: 'para', text: 'I don\'t think everyone needs to be interested in astronomy to be a better engineer. But I do think everyone benefits from having something that humbles them — something that regularly reminds them that they are a small, curious creature in an incomprehensibly large universe, doing their best to understand it. For me, that thing is the night sky.' },
    ],
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
    content: [
      { type: 'intro', text: 'I had been wanting to photograph the Milky Way for two years. I\'d watched dozens of YouTube tutorials. I\'d downloaded the PhotoPills app. I\'d chosen my location carefully — a hillside near Sahyadri, far from Pune\'s light pollution. I had a plan. What I did not have, it turned out, was any idea what I was actually doing.' },
      { type: 'heading', text: 'Mistake #1: I Trusted the Weather App' },
      { type: 'para', text: 'Clear skies, the forecast said. And for the first hour, it was correct — I could see the galactic core rising above the ridge, that faint smear of light that I\'d only ever seen in other people\'s photographs. I was genuinely emotional. Then came the clouds. Not gradually. One minute: stars. Next minute: grey nothing.' },
      { type: 'para', text: 'What I know now: weather apps are useless for astrophotography planning. You need dedicated tools — Clear Outside, Astrospheric, or Meteoblue. These show cloud cover in layers, atmospheric transparency, and seeing conditions. "Clear skies" from a general weather app means nothing if there\'s high-altitude cirrus at 8,000 metres.' },
      { type: 'heading', text: 'Mistake #2: The Dew Problem' },
      { type: 'para', text: 'I\'d set up my camera on a tripod and stepped away to let my eyes adjust. When I came back thirty minutes later, my first frame looked like I\'d photographed fog. The lens had completely fogged over with dew. I wiped it clean, took one frame, and it fogged again within ten minutes.' },
      { type: 'para', text: 'Maharashtra nights near monsoon season are humid. Very humid. A dew heater strap — a resistive heater that wraps around the lens barrel — is not optional in these conditions. It costs about ₹1,500. I bought one the next day.' },
      { type: 'callout', label: 'Field Lesson', text: 'Always carry a dew heater, a dry microfibre cloth, and hand warmers. If your lens fogs, do not wipe repeatedly — you will leave smear marks. Let it clear, then wipe once in a circular motion from centre outward.' },
      { type: 'heading', text: 'Mistake #3: White Balance Set to Auto' },
      { type: 'para', text: 'This one hurt to discover in post-processing. Auto white balance in night photography is a disaster. The camera guesses — and it guesses orange, because it\'s trying to compensate for the faint warm glow of distant city lights on the horizon. My entire Milky Way was the colour of a sodium streetlamp.' },
      { type: 'para', text: 'The fix is simple: set white balance to a fixed Kelvin value before you shoot. I now use 3900K as a starting point and adjust in Lightroom. Shoot in RAW — always RAW — so you can correct it non-destructively anyway.' },
      { type: 'heading', text: 'Mistake #4: The Car' },
      { type: 'para', text: 'At 2:17 AM, a car crept past on the unpaved track below my position, headlights on full beam, and drove directly through my 4-minute exposure. I will not repeat the words I said at that moment. The frame was completely blown out on one side — a bright white streak through the frame.' },
      { type: 'para', text: 'There is no fix for this in post. You reshoot. If you\'re on a remote location where vehicle traffic is possible, position yourself so headlights would travel parallel to your frame, not into it. Or come back the following night. Astrophotography teaches patience in ways that nothing else does.' },
      { type: 'heading', text: 'What Actually Worked' },
      { type: 'para', text: 'Despite everything, I got three usable frames between 3:15 and 4:00 AM. The galactic core was above the horizon, the air had cooled and the dew problem eased slightly, and the road below was quiet. The exposure I ended up using: f/2.8, ISO 3200, 20 seconds. Nothing technically impressive. But it was mine, and I\'d earned it.' },
      { type: 'list', items: [
        'Use PhotoPills or Stellarium to plan exact galactic core rise time and azimuth',
        'Check moon phase — new moon ± 5 days gives you the darkest skies',
        'Arrive 45 minutes early to set up and let your eyes dark-adapt',
        'Bring a red torch — white light destroys your night vision for 20+ minutes',
        'Use the 500 rule for shutter speed: 500 ÷ focal length = max seconds before star trails',
        'Focus on a bright star at infinity, zoom in on live view to check sharpness',
        'Shoot a test frame at ISO 6400 first to check composition, then drop ISO for final shots',
      ]},
      { type: 'divider' },
      { type: 'para', text: 'I\'ve been back to that hillside four times since. Each time I get a little better, make a few fewer mistakes, and come home with frames that make me less embarrassed. The Milky Way photograph I\'m proud of — genuinely proud of — hasn\'t happened yet. I\'m okay with that. The process is the point.' },
    ],
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
    content: [
      { type: 'intro', text: 'Let me start with what most popular explanations get wrong. The "bowling ball on a rubber sheet" analogy — where mass creates a dent in spacetime and other objects roll into that dent — is everywhere. It\'s on every science YouTube channel, every pop-sci book. And it\'s misleading, because it uses gravity (the ball pressing down) to explain gravity. It also only shows 2D space, when spacetime is four-dimensional. Here\'s a better way in.' },
      { type: 'heading', text: 'Start Here: What is Spacetime?' },
      { type: 'para', text: 'Before Einstein, space and time were separate things. Newton thought of space as a fixed, absolute stage — an infinite three-dimensional grid that existed whether anything was in it or not. Time ticked uniformly everywhere, for everyone, simultaneously.' },
      { type: 'para', text: 'Special Relativity (1905) destroyed this picture. Einstein showed that space and time are not separate — they\'re woven together into a single four-dimensional fabric called spacetime. And crucially, measurements of space and time depend on the observer\'s state of motion. Two observers moving relative to each other will genuinely disagree on the length of an object and the time between two events. Neither is wrong — they\'re measuring different slices of the same spacetime.' },
      { type: 'quote', text: 'The distinction between past, present, and future is only a stubbornly persistent illusion.', label: '— Albert Einstein' },
      { type: 'heading', text: 'The Key Insight of General Relativity' },
      { type: 'para', text: 'General Relativity (1915) goes further. It says: mass and energy curve spacetime. And objects moving through curved spacetime follow the straightest possible paths — called geodesics. What we experience as gravity is not a force pulling objects together. It\'s the geometry of spacetime itself.' },
      { type: 'para', text: 'Here\'s the thought experiment that unlocks it. Imagine you\'re in a sealed box with no windows, accelerating upward in empty space at 9.8 m/s². You drop a ball — it falls to the floor. Now imagine you\'re in that same box, stationary, on the surface of the Earth. You drop a ball — it falls to the floor. Einstein\'s great insight was that these two situations are physically identical. There is no local experiment you can do to tell them apart. This is the Equivalence Principle — the cornerstone of GR.' },
      { type: 'callout', label: 'The Equivalence Principle', text: 'Gravitational acceleration and inertial acceleration are locally indistinguishable. This means gravity is not a force — it\'s a consequence of being in curved spacetime.' },
      { type: 'heading', text: 'What "Curved Spacetime" Actually Means' },
      { type: 'para', text: 'Curvature in spacetime is not just about space bending — it\'s primarily about time running at different rates at different locations. Near a massive object, time runs slower. This is gravitational time dilation, and it\'s not just theoretical — your phone\'s GPS satellites have to correct for it. The satellites\' clocks run slightly faster in orbit (weaker gravity) and slightly slower due to their speed (special relativistic effect). Without those corrections, GPS would drift by about 10 kilometres per day.' },
      { type: 'para', text: 'The reason objects fall toward massive bodies is that they\'re following the straightest possible path through a spacetime where time flows more slowly near mass. The future of a stationary object near Earth points "downward" in spacetime — toward where time runs slower — and that\'s what we experience as falling.' },
      { type: 'heading', text: 'The Einstein Field Equations' },
      { type: 'para', text: 'GR is summarized in a set of 10 coupled nonlinear partial differential equations, which look terrifying but say something conceptually simple: the curvature of spacetime on the left equals the distribution of mass-energy on the right. Mass tells spacetime how to curve. Spacetime tells mass how to move.' },
      { type: 'list', items: [
        'Gravitational waves — ripples in spacetime caused by accelerating masses (confirmed by LIGO in 2015)',
        'Black holes — regions where spacetime curvature becomes so extreme that escape velocity exceeds light speed',
        'Gravitational lensing — light bending around massive objects (first confirmed by Eddington in 1919)',
        'The expansion of the universe — GR predicts it; Hubble confirmed it observationally',
        'GPS accuracy — satellites must apply relativistic corrections to function correctly',
      ]},
      { type: 'heading', text: 'The Part That Still Keeps Me Up at Night' },
      { type: 'para', text: 'Here is what I find genuinely mind-bending, even after years of reading about this: GR is not compatible with quantum mechanics. The two most successful physical theories humans have ever produced — one describes the very large, one describes the very small — cannot both be right. At the Planck scale, both break down.' },
      { type: 'para', text: 'A complete theory of quantum gravity — something that unifies GR and QM — is the biggest open problem in fundamental physics. String theory, loop quantum gravity, causal dynamical triangulations — these are attempts, but none is confirmed. The universe, it turns out, is still keeping its deepest secrets. I find that enormously motivating.' },
      { type: 'divider' },
      { type: 'para', text: 'If you want to go deeper, the best non-mathematical treatment I\'ve found is "Relativity Visualized" by Lewis Carroll Epstein — it builds genuine geometric intuition without calculus. For the actual equations, Sean Carroll\'s "Spacetime and Geometry" is rigorous and beautifully written. But honestly: start with the thought experiments. Einstein himself said that imagination is more important than knowledge. He wasn\'t wrong.' },
    ],
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
