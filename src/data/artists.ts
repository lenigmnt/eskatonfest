import type { Artist } from '../types/artist'

import nocthavenImage from '../../public/images/nocthaven-band.webp'
import veloriaImage from '../../public/images/veloria-band.webp'
import thornrequiemImage from '../../public/images/thornrequiem-band.webp'
import ashenVeilImage from '../../public/images/ashenveil-band.webp'
import cathedraNoirImage from '../../public/images/cathedranoir-band.webp'
import lunaraImage from '../../public/images/lunara-band.webp'
import obsidianHymnsImage from '../../public/images/obsidianhymns-band.webp'
import mourningStarlingImage from '../../public/images/mourningstartling.webp'
import vesperThroneImage from '../../public/images/vesperthrone.webp'

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Nocthaven',
    description: 'Goth metal aux atmosphères sombres et mélodiques.',
    day: 1,
    image: nocthavenImage,
  },
  {
    id: 2,
    name: 'Veloria',
    description: 'Metal symphonique porté par une voix féminine.',
    day: 1,
    image: veloriaImage,
  },
  {
    id: 3,
    name: 'Thornrequiem',
    description: 'Dark metal intense aux influences gothiques.',
    day: 1,
    image: thornrequiemImage,
  },
  {
    id: 4,
    name: 'Ashen Veil',
    description: 'Mélodies obscures et arrangements symphoniques.',
    day: 1,
    image: ashenVeilImage,
  },
  {
    id: 5,
    name: 'Cathedra Noir',
    description: 'Une esthétique gothique à l’ambiance théâtrale.',
    day: 2,
    image: cathedraNoirImage,
  },
  {
    id: 6,
    name: 'Lunara',
    description: 'Metal atmosphérique et voix féminines.',
    day: 2,
    image: lunaraImage,
  },
  {
    id: 7,
    name: 'Obsidian Hymns',
    description: 'Son massif et univers sombre.',
    day: 2,
    image: obsidianHymnsImage,
  },
  {
    id: 8,
    name: 'Mourning Starling',
    description: 'Metal mélodique aux accents symphoniques.',
    day: 2,
    image: mourningStarlingImage,
  },
  {
    id: 9,
    name: 'Vesper Throne',
    description: 'Dark metal monumental et cinématographique.',
    day: 2,
    image: vesperThroneImage,
  },
]