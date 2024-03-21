const pokemon = [
  {
    id: 1,
    name: "Bulbizarre",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 2,
    name: "Herbizarre",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 3,
    name: "Florizarre",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 4,
    name: "Salamèche",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    shiny: false,
    types: ["fire"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 5,
    name: "Reptincel",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    shiny: false,
    types: ["fire"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 6,
    name: "Dracaufeu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    shiny: false,
    types: ["fire", "flying"],
    catched: true,
    catchRate: 45,
  },
  {
    id: 7,
    name: "Carapuce",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    shiny: false,
    types: ["water"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 8,
    name: "Carabaffe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    shiny: false,
    types: ["water"],
    catched: true,
    catchRate: 45,
  },
  {
    id: 9,
    name: "Tortank",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    shiny: false,
    types: ["water"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 10,
    name: "Chenipan",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    shiny: false,
    types: ["bug"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 11,
    name: "Chrysacier",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    shiny: false,
    types: ["bug"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 12,
    name: "Papilusion",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    shiny: false,
    types: ["bug", "flying"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 13,
    name: "Aspicot",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    shiny: false,
    types: ["bug", "poison"],
    catchRate: 255,
    catched: true,
  },
  {
    id: 14,
    name: "Coconfort",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    shiny: false,
    types: ["bug", "poison"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 15,
    name: "Dardargnan",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    shiny: false,
    types: ["bug", "poison"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 16,
    name: "Roucool",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 17,
    name: "Roucoups",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 120,
    catched: true,
  },
  {
    id: 18,
    name: "Roucarnage",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 19,
    name: "Rattata",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    shiny: false,
    types: ["normal"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 20,
    name: "Rattatac",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    shiny: false,
    types: ["normal"],
    catchRate: 127,
    catched: false,
  },
  {
    id: 21,
    name: "Piafabec",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 22,
    name: "Rapasdepic",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 23,
    name: "Abo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    shiny: false,
    types: ["poison"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 24,
    name: "Arbok",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    shiny: false,
    types: ["poison"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 25,
    name: "Pikachu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    shiny: false,
    types: ["electric"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 26,
    name: "Raichu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    shiny: false,
    types: ["electric"],
    catchRate: 75,
    catched: false,
  },
  {
    id: 27,
    name: "Sabelette",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    shiny: false,
    types: ["ground"],
    catchRate: 255,
    catched: true,
  },
  {
    id: 28,
    name: "Sablaireau",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    shiny: false,
    types: ["ground"],
    catchRate: 90,
    catched: true,
  },
  {
    id: 29,
    name: "Nidoran♀",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    shiny: false,
    types: ["poison"],
    catchRate: 235,
    catched: false,
  },
  {
    id: 30,
    name: "Nidorina",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    shiny: false,
    types: ["poison"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 31,
    name: "Nidoqueen",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    shiny: false,
    types: ["poison", "ground"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 32,
    name: "Nidoran♂",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    shiny: false,
    types: ["poison"],
    catchRate: 235,
    catched: false,
  },
  {
    id: 33,
    name: "Nidorino",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    shiny: false,
    types: ["poison"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 34,
    name: "Nidoking",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    shiny: false,
    types: ["poison", "ground"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 35,
    name: "Mélofée",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    shiny: false,
    types: ["fairy"],
    catchRate: 150,
    catched: true,
  },
  {
    id: 36,
    name: "Mélodelfe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    shiny: false,
    types: ["fairy"],
    catchRate: 25,
    catched: true,
  },
  {
    id: 37,
    name: "Goupix",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    shiny: false,
    types: ["fire"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 38,
    name: "Feunard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    shiny: false,
    types: ["fire"],
    catched: true,
    catchRate: 75,
  },
  {
    id: 39,
    name: "Rondoudou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    shiny: false,
    types: ["normal", "fairy"],
    catched: true,
    catchRate: 170,
  },
  {
    id: 40,
    name: "Grodoudou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    shiny: false,
    types: ["normal", "fairy"],
    catchRate: 50,
    catched: false,
  },
  {
    id: 41,
    name: "Nosferapti",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    shiny: false,
    types: ["poison", "flying"],
    catchRate: 255,
    catched: true,
  },
  {
    id: 42,
    name: "Nosferalto",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    shiny: false,
    types: ["poison", "flying"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 43,
    name: "Mystherbe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    shiny: false,
    types: ["grass", "poison"],
    catched: true,
    catchRate: 255,
  },
  {
    id: 44,
    name: "Ortide",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 45,
    name: "Rafflesia",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 46,
    name: "Paras",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    shiny: false,
    types: ["bug", "grass"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 47,
    name: "Parasect",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    shiny: false,
    types: ["bug", "grass"],
    catched: true,
    catchRate: 75,
  },
  {
    id: 48,
    name: "Mimitoss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    shiny: false,
    types: ["bug", "poison"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 49,
    name: "Aéromite",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    shiny: false,
    types: ["bug", "poison"],
    catchRate: 75,
    catched: true,
  },
  {
    id: 50,
    name: "Taupiqueur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    shiny: false,
    types: ["ground"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 51,
    name: "Triopikeur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    shiny: false,
    types: ["ground"],
    catchRate: 50,
    catched: false,
  },
  {
    id: 52,
    name: "Miaouss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    shiny: false,
    types: ["normal"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 53,
    name: "Persian",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    shiny: false,
    types: ["normal"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 54,
    name: "Psykokwak",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    shiny: false,
    types: ["water"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 55,
    name: "Akwakwak",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    shiny: false,
    types: ["water"],
    catchRate: 75,
    catched: true,
  },
  {
    id: 56,
    name: "Férosinge",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 57,
    name: "Colossinge",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 75,
    catched: false,
  },
  {
    id: 58,
    name: "Caninos",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    shiny: false,
    types: ["fire"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 59,
    name: "Arcanin",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    shiny: false,
    types: ["fire"],
    catchRate: 75,
    catched: false,
  },
  {
    id: 60,
    name: "Ptitard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    shiny: false,
    types: ["water"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 61,
    name: "Têtarte",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    shiny: false,
    types: ["water"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 62,
    name: "Tartard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    shiny: false,
    types: ["water", "fighting"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 63,
    name: "Abra",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    shiny: false,
    types: ["psychic"],
    catchRate: 200,
    catched: true,
  },
  {
    id: 64,
    name: "Kadabra",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    shiny: false,
    types: ["psychic"],
    catched: true,
    catchRate: 100,
  },
  {
    id: 65,
    name: "Alakazam",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    shiny: false,
    types: ["psychic"],
    catchRate: 50,
    catched: false,
  },
  {
    id: 66,
    name: "Machoc",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 180,
    catched: false,
  },
  {
    id: 67,
    name: "Machopeur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 68,
    name: "Mackogneur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 69,
    name: "Chétiflor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 70,
    name: "Boustiflor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 71,
    name: "Empiflor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    shiny: false,
    types: ["grass", "poison"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 72,
    name: "Tentacool",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    shiny: false,
    types: ["water", "poison"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 73,
    name: "Tentacruel",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    shiny: false,
    types: ["water", "poison"],
    catchRate: 60,
    catched: true,
  },
  {
    id: 74,
    name: "Racaillou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    shiny: false,
    types: ["rock", "ground"],
    catchRate: 255,
    catched: true,
  },
  {
    id: 75,
    name: "Gravalanch",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    shiny: false,
    types: ["rock", "ground"],
    catchRate: 120,
    catched: true,
  },
  {
    id: 76,
    name: "Grolem",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    shiny: false,
    types: ["rock", "ground"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 77,
    name: "Ponyta",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    shiny: false,
    types: ["fire"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 78,
    name: "Galopa",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    shiny: false,
    types: ["fire"],
    catchRate: 60,
    catched: false,
  },
  {
    id: 79,
    name: "Ramoloss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    shiny: false,
    types: ["water", "psychic"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 80,
    name: "Flagadoss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    shiny: false,
    types: ["water", "psychic"],
    catched: true,
    catchRate: 75,
  },
  {
    id: 81,
    name: "Magnéti",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    shiny: false,
    types: ["electric", "steel"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 82,
    name: "Magnéton",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    shiny: false,
    types: ["electric", "steel"],
    catchRate: 60,
    catched: true,
  },
  {
    id: 83,
    name: "Canarticho",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 84,
    name: "Doduo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 85,
    name: "Dodrio",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    shiny: false,
    types: ["normal", "flying"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 86,
    name: "Otaria",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    shiny: false,
    types: ["water"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 87,
    name: "Lamantine",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    shiny: false,
    types: ["water", "ice"],
    catchRate: 75,
    catched: true,
  },
  {
    id: 88,
    name: "Tadmorv",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    shiny: false,
    types: ["poison"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 89,
    name: "Grotadmorv",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    shiny: false,
    types: ["poison"],
    catchRate: 75,
    catched: false,
  },
  {
    id: 90,
    name: "Kokiyas",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    shiny: false,
    types: ["water"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 91,
    name: "Crustabri",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    shiny: false,
    types: ["water", "ice"],
    catchRate: 60,
    catched: true,
  },
  {
    id: 92,
    name: "Fantominus",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    shiny: false,
    types: ["ghost", "poison"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 93,
    name: "Spectrum",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    shiny: false,
    types: ["ghost", "poison"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 94,
    name: "Ectoplasma",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    shiny: false,
    types: ["ghost", "poison"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 95,
    name: "Onix",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    shiny: false,
    types: ["rock", "ground"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 96,
    name: "Soporifik",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    shiny: false,
    types: ["psychic"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 97,
    name: "Hypnomade",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    shiny: false,
    types: ["psychic"],
    catchRate: 75,
    catched: true,
  },
  {
    id: 98,
    name: "Krabby",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    shiny: false,
    types: ["water"],
    catchRate: 225,
    catched: false,
  },
  {
    id: 99,
    name: "Krabboss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    shiny: false,
    types: ["water"],
    catchRate: 60,
    catched: true,
  },
  {
    id: 100,
    name: "Voltorbe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    shiny: false,
    types: ["electric"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 101,
    name: "Électrode",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    shiny: false,
    types: ["electric"],
    catchRate: 60,
    catched: false,
  },
  {
    id: 102,
    name: "Noeunoeuf",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    shiny: false,
    types: ["grass", "psychic"],
    catchRate: 90,
    catched: false,
  },
  {
    id: 103,
    name: "Noadkoko",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    shiny: false,
    types: ["grass", "psychic"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 104,
    name: "Osselait",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    shiny: false,
    types: ["ground"],
    catchRate: 190,
    catched: false,
  },
  {
    id: 105,
    name: "Ossatueur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    shiny: false,
    types: ["ground"],
    catchRate: 75,
    catched: true,
  },
  {
    id: 106,
    name: "Kicklee",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 107,
    name: "Tygnon",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    shiny: false,
    types: ["fighting"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 108,
    name: "Excelangue",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    shiny: false,
    types: ["normal"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 109,
    name: "Smogo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    shiny: false,
    types: ["poison"],
    catchRate: 190,
    catched: true,
  },
  {
    id: 110,
    name: "Smogogo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    shiny: false,
    types: ["poison"],
    catchRate: 60,
    catched: false,
  },
  {
    id: 111,
    name: "Rhinocorne",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    shiny: false,
    types: ["ground", "rock"],
    catchRate: 120,
    catched: false,
  },
  {
    id: 112,
    name: "Rhinoféros",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    shiny: false,
    types: ["ground", "rock"],
    catchRate: 60,
    catched: false,
  },
  {
    id: 113,
    name: "Leveinard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    shiny: false,
    types: ["normal"],
    catchRate: 30,
    catched: false,
  },
  {
    id: 114,
    name: "Saquedeneu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    shiny: false,
    types: ["grass"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 115,
    name: "Kangourex",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    shiny: false,
    types: ["normal"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 116,
    name: "Hypotrempe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    shiny: false,
    types: ["water"],
    catchRate: 225,
    catched: false,
  },
  {
    id: 117,
    name: "Hypocéan",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    shiny: false,
    types: ["water"],
    catchRate: 75,
    catched: false,
  },
  {
    id: 118,
    name: "Poissirène",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    shiny: false,
    types: ["water"],
    catchRate: 225,
    catched: false,
  },
  {
    id: 119,
    name: "Poissoroy",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    shiny: false,
    types: ["water"],
    catchRate: 60,
    catched: true,
  },
  {
    id: 120,
    name: "Stari",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    shiny: false,
    types: ["water"],
    catchRate: 225,
    catched: false,
  },
  {
    id: 121,
    name: "Staross",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    shiny: false,
    types: ["water", "psychic"],
    catchRate: 60,
    catched: false,
  },
  {
    id: 122,
    name: "M. Mime",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    shiny: false,
    types: ["psychic", "fairy"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 123,
    name: "Insécateur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    shiny: false,
    types: ["bug", "flying"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 124,
    name: "Lippoutou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    shiny: false,
    types: ["ice", "psychic"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 125,
    name: "Élektek",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    shiny: false,
    types: ["electric"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 126,
    name: "Magmar",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    shiny: false,
    types: ["fire"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 127,
    name: "Scarabrute",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    shiny: false,
    types: ["bug"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 128,
    name: "Tauros",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    shiny: false,
    types: ["normal"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 129,
    name: "Magicarpe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    shiny: false,
    types: ["water"],
    catchRate: 255,
    catched: false,
  },
  {
    id: 130,
    name: "Léviator",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    shiny: false,
    types: ["water", "flying"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 131,
    name: "Lokhlass",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    shiny: false,
    types: ["water", "ice"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 132,
    name: "Métamorph",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    shiny: false,
    types: ["normal"],
    catchRate: 35,
    catched: true,
  },
  {
    id: 133,
    name: "Évoli",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    shiny: false,
    types: ["normal"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 134,
    name: "Aquali",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    shiny: false,
    types: ["water"],
    catched: true,
    catchRate: 45,
  },
  {
    id: 135,
    name: "Voltali",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    shiny: false,
    types: ["electric"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 136,
    name: "Pyroli",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    shiny: false,
    types: ["fire"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 137,
    name: "Porygon",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    shiny: false,
    types: ["normal"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 138,
    name: "Amonita",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    shiny: false,
    types: ["rock", "water"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 139,
    name: "Amonistar",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    shiny: false,
    types: ["rock", "water"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 140,
    name: "Kabuto",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    shiny: false,
    types: ["rock", "water"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 141,
    name: "Kabutops",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    shiny: false,
    types: ["rock", "water"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 142,
    name: "Ptéra",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    shiny: false,
    types: ["rock", "flying"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 143,
    name: "Ronflex",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    shiny: false,
    types: ["normal"],
    catchRate: 25,
    catched: true,
  },
  {
    id: 144,
    name: "Artikodin",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    shiny: false,
    types: ["ice", "flying"],
    catchRate: 3,
    catched: false,
  },
  {
    id: 145,
    name: "Électhor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    shiny: false,
    types: ["electric", "flying"],
    catchRate: 3,
    catched: false,
  },
  {
    id: 146,
    name: "Sulfura",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    shiny: false,
    types: ["fire", "flying"],
    catchRate: 3,
    catched: false,
  },
  {
    id: 147,
    name: "Minidraco",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    shiny: false,
    types: ["dragon"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 148,
    name: "Draco",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    shiny: false,
    types: ["dragon"],
    catchRate: 45,
    catched: true,
  },
  {
    id: 149,
    name: "Dracolosse",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    shiny: false,
    types: ["dragon", "flying"],
    catchRate: 45,
    catched: false,
  },
  {
    id: 150,
    name: "Mewtwo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    shiny: false,
    types: ["psychic"],
    catchRate: 3,
    catched: true,
  },
  {
    id: 151,
    name: "Mew",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    shiny: false,
    types: ["psychic"],
    catchRate: 45,
    catched: true,
  },
];

module.exports = pokemon;
