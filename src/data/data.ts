export interface Game {
  id: string;
  title: string;
  rom: string;
  bios?: string;
  cover: string;
}

export const GAMES: Game[] = [
  // --- FILA 1: LOS FUNDADORES ---
  {
    id: 'sf2',
    title: "Street Fighter II'",
    rom: '/roms/sf2ce.zip',
    cover: '/covers/89552--street-fighter-2-champion-edition.png'
  },
  {
    id: 'kof98',
    title: "King of Fighters '98",
    rom: '/roms/kof98.zip',
    bios: '/roms/neogeo.zip',
    cover: '/covers/6861321-the-king-of-fighters-98-the-slugfest-neo-geo-cd-front-cover.jpg'
  },
  {
    id: 'mvsc',
    title: "Marvel vs. Capcom",
    rom: '/roms/mvsc.zip', 
    cover: '/covers/53394--marvel-vs-capcom-clash-of-super-heroes.png'
  },

  // --- FILA 2: BRUTALIDAD & CLÁSICOS ---
  {
    id: 'mk2',
    title: "Mortal Kombat II",
    rom: '/roms/mk2.zip',
    cover: '/covers/mortal-kombat-ii-00659-01.jpg'
  },
  {
    id: 'umk3',
    title: "Ultimate MK3",
    rom: '/roms/umk3.zip',
    cover: '/covers/$T2eC16R,!ygE9s7HJEk)BR1epw)rC!~~60_1.jpg'
  },
  {
    id: 'mslugx',
    title: "Metal Slug X",
    rom: '/roms/mslugx.zip',
    bios: '/roms/neogeo.zip',
    cover: '/covers/38423--metal-slug-x.png'
  },

  // --- FILA 3: JOYAS OCULTAS ---
  {
    id: 'dino',
    title: "Cadillacs & Dinosaurs",
    rom: '/roms/dino.zip',
    cover: '/covers/cadillacs-and-dinosaurs-00163-01.jpg'
  },
  {
    id: 'vsav',
    title: "Vampire Savior",
    rom: '/roms/vsav.zip',
    cover: '/covers/vampire-savior-the-lord-of-vampire-01229-01.jpg'
  },

  // --- FILA 4: LA SANTA TRINIDAD ---
  {
    id: 'garou',
    title: "Garou: Mark of the Wolves",
    rom: '/roms/garou.zip',
    bios: '/roms/neogeo.zip',
    cover: '/covers/FP_DSK7WYAM0Hds.jpg'
  },
  {
    id: 'sfa3',
    title: "Street Fighter Alpha 3",
    rom: '/roms/sfa3.zip',
    cover: '/covers/s-l1200.jpg'
  },
  {
    id: 'lastbld2',
    title: "The Last Blade 2",
    rom: '/roms/lastbld2.zip',
    bios: '/roms/neogeo.zip',
    cover: '/covers/6859650-the-last-blade-2-neo-geo-cd-front-cover.jpg'
  }
];