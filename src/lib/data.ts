import { colors } from './colors'

export interface Playlist {
  id: string
  albumId: number
  title: string
  color: (typeof colors)[keyof typeof colors]
  cover: string
  artists: string[]
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: 'Rock Classics',
    color: colors.yellow,
    cover: 'https://i.scdn.co/image/ab67706f00000002d482dbb2c3e8c4ce57005946',
    artists: [
      'Rock legends & epic songs that continue to inspire generations. Cover: The Rolling Stones'
    ]
  },
  {
    id: '2',
    albumId: 2,
    title: '’80s Hard Rock',
    color: colors.white,
    cover: 'https://i.scdn.co/image/ab67706f000000029205ddd6990d57d56db91b81',
    artists: ['Hair goals, spandex and epic guitar solos. We got you.']
  },
  {
    id: '3',
    albumId: 3,
    title: '00s Metal Classics',
    color: colors.red,
    cover: 'https://i.scdn.co/image/ab67706f000000029f50fed38a51e36e20284aa2',
    artists: ['The biggest metal songs of the 2000s. Cover: Slipknot']
  },
  {
    id: '4',
    albumId: 4,
    title: '00s Rock Anthems',
    color: colors.red,
    cover: 'https://i.scdn.co/image/ab67706f0000000230a8d6db37b772b10cee0d34',
    artists: ['These songs rocked the 00s. Cover: Red Hot Chili Peppers']
  },
  {
    id: '5',
    albumId: 5,
    title: 'Los 2000 España',
    color: colors.yellow,
    cover: 'https://i.scdn.co/image/ab67706f00000002f55c59c78772edc943bd9f73',
    artists: ['Lo mejor de la primera década del milenio.']
  }
]

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_more'
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_side'
}))

export const allPlaylists = [...playlists, ...morePlaylists, ...sidebarPlaylists]

export interface Song {
  id: number
  albumId: number
  title: string
  image: string
  artists: string[]
  album: string
  duration: string
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: 'Hotel California - 2013 Remaster',
    image: `https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778`,
    artists: ['Eagles'],
    album: 'Hotel California (2013 Remaster)',
    duration: '6:30'
  },
  {
    id: 2,
    albumId: 1,
    title: 'Stairway to Heaven - Remaster',
    image: `https://i.scdn.co/image/ab67616d000048514509204d0860cc0cc67e83dc`,
    artists: ['Led Zeppelin'],
    album: 'Led Zeppelin IV (Remaster)',
    duration: '8:02'
  },
  {
    id: 3,
    albumId: 1,
    title: 'Californication',
    image: `https://i.scdn.co/image/ab67616d0000485194d08ab63e57b0cae74e8595`,
    artists: ['Red Hot Chili Peppers'],
    album: 'Californication (Deluxe Edition)',
    duration: '5:22'
  },
  {
    id: 4,
    albumId: 1,
    title: 'Seven Nation Army',
    image: `https://i.scdn.co/image/ab67616d00004851a69f71a8794e2d867a52f98f`,
    artists: ['The White Stripes'],
    album: 'Elephant',
    duration: '3:50'
  },
  {
    id: 5,
    albumId: 1,
    title: 'Creep',
    image: `https://i.scdn.co/image/ab67616d00004851df55e326ed144ab4f5cecf95`,
    artists: ['Radiohead'],
    album: 'Pablo Honey',
    duration: '3:56'
  },
  {
    id: 1,
    albumId: 2,
    title: 'Jump - 2015 Remaster',
    image: `https://i.scdn.co/image/ab67616d00004851b414c63fb435b622238c15ed`,
    artists: ['Van Halen'],
    album: '1984 (Remastered)',
    duration: '4:01'
  },
  {
    id: 2,
    albumId: 2,
    title: 'Paradise City',
    image: `https://i.scdn.co/image/ab67616d0000485121ebf49b3292c3f0f575f0f5`,
    artists: ["Guns N' Roses"],
    album: 'Appetite For Destruction',
    duration: '6:48'
  },
  {
    id: 3,
    albumId: 2,
    title: 'Rock You Like A Hurricane - 2011',
    image: `https://i.scdn.co/image/ab67616d000048519f2023d391c3bd4acf4d51c6`,
    artists: ['Scorpions'],
    album: 'Comeblack',
    duration: '4:15'
  },
  {
    id: 4,
    albumId: 2,
    title: 'Master of Puppets',
    image: `https://i.scdn.co/image/ab67616d00004851668e3aca3167e6e569a9aa20`,
    artists: ['Metallica'],
    album: 'Master of Puppets (Remastered)',
    duration: '8:36'
  },
  {
    id: 5,
    albumId: 2,
    title: 'Pour Some Sugar On Me - Remastered 2017',
    image: `https://i.scdn.co/image/ab67616d00004851222cb38afc3b3b47d9df26aa`,
    artists: ['Def Leppard'],
    album: 'Hysteria (Remastered 2017)',
    duration: '4:27'
  },
  {
    id: 1,
    albumId: 3,
    title: 'Chop Suey!',
    image: `https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578`,
    artists: ['System Of A Down'],
    album: 'Toxicity',
    duration: '3:29'
  },
  {
    id: 2,
    albumId: 3,
    title: 'Here To Stay',
    image: `https://i.scdn.co/image/ab67616d00004851b9b950561aa1d3606865a2ee`,
    artists: ['Korn'],
    album: 'Untouchables',
    duration: '4:31'
  },
  {
    id: 3,
    albumId: 3,
    title: 'Duality',
    image: `https://i.scdn.co/image/ab67616d000048516b3463e7160d333ada4b175a`,
    artists: ['Slipknot'],
    album: 'Vol. 3: The Subliminal Verses',
    duration: '3:34'
  },
  {
    id: 4,
    albumId: 3,
    title: 'Numb',
    image: `https://i.scdn.co/image/ab67616d00004851b4ad7ebaf4575f120eb3f193`,
    artists: ['Linkin Park'],
    album: 'Meteora',
    duration: '3:06'
  },
  {
    id: 5,
    albumId: 3,
    title: 'Down With The Sickness',
    image: `https://i.scdn.co/image/ab67616d000048512b222dcd5c4fcac7c0e81da2`,
    artists: ['Disturbed'],
    album: 'The Sickness',
    duration: '3:38'
  },
  {
    id: 1,
    albumId: 4,
    title: 'Numb',
    image: `https://i.scdn.co/image/ab67616d00004851b4ad7ebaf4575f120eb3f193`,
    artists: ['Linkin Park'],
    album: 'Meteora',
    duration: '3:06'
  },
  {
    id: 2,
    albumId: 4,
    title: 'Holiday',
    image: 'https://i.scdn.co/image/ab67616d000048511bb1db39abc18755d7ab2114',
    artists: ['Green Day'],
    album: 'American Idiot',
    duration: '3:54'
  },
  {
    id: 3,
    albumId: 4,
    title: 'Dani California',
    image: 'https://i.scdn.co/image/ab67616d0000485109fd83d32aee93dceba78517',
    artists: ['Red Hot Chili Peppers'],
    album: 'Stadium Arcadium',
    duration: '4:42'
  },
  {
    id: 4,
    albumId: 4,
    title: 'Bring Me To Life',
    image: 'https://i.scdn.co/image/ab67616d0000485125f49ab23f0ec6332efef432',
    artists: ['Evanescence'],
    album: 'Fallen',
    duration: '3:57'
  },
  {
    id: 5,
    albumId: 4,
    title: 'Uprising',
    image: 'https://i.scdn.co/image/ab67616d00004851b6d4566db0d12894a1a3b7a2',
    artists: ['Muse'],
    album: 'The Resistance',
    duration: '4:11'
  },
  {
    id: 1,
    albumId: 5,
    title: 'Fiesta Pagana',
    image: 'https://i.scdn.co/image/ab67616d000048513e782d96dc4cbe7950a274a9',
    artists: ['Mägo de Oz'],
    album: 'Finisterra',
    duration: '4:55'
  },
  {
    id: 2,
    albumId: 5,
    title: 'Insoportable',
    image: 'https://i.scdn.co/image/ab67616d00004851fb28f40dec4551052d109cba',
    artists: ['El Canto del Loco'],
    album: 'Estados de Ánimo',
    duration: '4:08'
  },
  {
    id: 3,
    albumId: 5,
    title: 'Como Camarón',
    image: 'https://i.scdn.co/image/ab67616d000048511a311570340a4f6530da158b',
    artists: ['Estopa'],
    album: 'Estopa',
    duration: '3:27'
  },
  {
    id: 4,
    albumId: 5,
    title: 'Soldadito Marinero',
    image: 'https://i.scdn.co/image/ab67616d00004851a618985542a38277dc088c3a',
    artists: ['Fito y Fitipaldis'],
    album: 'Lo más lejos, a tu lado',
    duration: '3:59'
  },
  {
    id: 5,
    albumId: 5,
    title: 'Caminando por la vida',
    image: 'https://i.scdn.co/image/ab67616d00004851fdf0ca257453adac7d1167b2',
    artists: ['Melendi'],
    album: 'Que El Cielo Espere Sentao',
    duration: '3:22'
  }
]
