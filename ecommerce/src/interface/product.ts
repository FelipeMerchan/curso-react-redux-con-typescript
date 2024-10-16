export type Product = {
  id: string;
  image: string;
  price: number;
  title: string;
  type: Type;
}

export type CartProduct = {
  id: string;
  image: string;
  price: number;
  quantity: number;
  title: string;
}

export interface ProductResponse {
  amiiboSeries: AmiiboSeries;
  character:    string;
  gameSeries:   string;
  head:         string;
  image:        string;
  name:         string;
  release:      Release;
  tail:         string;
  type:         Type;
  id:           string;
  price:        number;
}

export interface CreateProductRequest {
  amiiboSeries: string;
  character:    string;
  gameSeries:   string;
  head:         string;
  image:        string;
  name:         string;
  release:      string;
  tail:         string;
  type:         string;
  price:        number;
}

export enum AmiiboSeries {
  AnimalCrossing = "Animal Crossing",
  BoxBoy = "BoxBoy!",
  ChibiRobo = "Chibi-Robo!",
  Diablo = "Diablo",
  FireEmblem = "Fire Emblem",
  Kirby = "Kirby",
  LegendOfZelda = "Legend Of Zelda",
  MarioSportsSuperstars = "Mario Sports Superstars",
  MegaMan = "Mega Man",
  Metroid = "Metroid",
  MonsterHunter = "Monster Hunter",
  MonsterHunterRise = "Monster Hunter Rise",
  Others = "Others",
  Pikmin = "Pikmin",
  Pokemon = "Pokemon",
  PowerPros = "Power Pros",
  ShovelKnight = "Shovel Knight",
  Skylanders = "Skylanders",
  Splatoon = "Splatoon",
  SuperMarioBros = "Super Mario Bros.",
  SuperNintendoWorld = "Super Nintendo World",
  SuperSmashBros = "Super Smash Bros.",
  The8BitMario = "8-bit Mario",
  YoshiSWoollyWorld = "Yoshi's Woolly World",
  YuGiOh = "Yu-Gi-Oh!",
}

export interface Release {
  au: Date | null;
  eu: Date | null;
  jp: Date | null;
  na: Date | null;
}

export enum Type {
  Band = "Band",
  Card = "Card",
  Figure = "Figure",
  Yarn = "Yarn",
}

