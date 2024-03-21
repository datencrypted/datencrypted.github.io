const pokemons = [
  {
    _id: {
      $oid: "62d90e9c11256025f5c3e9d0",
    },
    id: 1,
    name: "Bulbizarre",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392220912",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9d2",
    },
    id: 2,
    name: "Herbizarre",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392221064",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9d5",
    },
    id: 3,
    name: "Florizarre",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392221177",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9d8",
    },
    id: 4,
    name: "Salamèche",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392221295",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9db",
    },
    id: 5,
    name: "Reptincel",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392221411",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9de",
    },
    id: 6,
    name: "Dracaufeu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    shiny: false,
    types: ["fire", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392221521",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 45,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9e1",
    },
    id: 7,
    name: "Carapuce",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392221641",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9e3",
    },
    id: 8,
    name: "Carabaffe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392221749",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 45,
  },
  {
    _id: {
      $oid: "62d90e9d11256025f5c3e9e6",
    },
    id: 9,
    name: "Tortank",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392221915",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9e9",
    },
    id: 10,
    name: "Chenipan",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    shiny: false,
    types: ["bug"],
    createdAt: {
      $date: {
        $numberLong: "1658392222031",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9ec",
    },
    id: 11,
    name: "Chrysacier",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    shiny: false,
    types: ["bug"],
    createdAt: {
      $date: {
        $numberLong: "1658392222164",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9ef",
    },
    id: 12,
    name: "Papilusion",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    shiny: false,
    types: ["bug", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392222280",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9f2",
    },
    id: 13,
    name: "Aspicot",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    shiny: false,
    types: ["bug", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392222388",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9f6",
    },
    id: 14,
    name: "Coconfort",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    shiny: false,
    types: ["bug", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392222492",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9f9",
    },
    id: 15,
    name: "Dardargnan",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    shiny: false,
    types: ["bug", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392222603",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9fc",
    },
    id: 16,
    name: "Roucool",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392222714",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3e9ff",
    },
    id: 17,
    name: "Roucoups",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392222826",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9e11256025f5c3ea02",
    },
    id: 18,
    name: "Roucarnage",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392222935",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea05",
    },
    id: 19,
    name: "Rattata",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392223044",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea08",
    },
    id: 20,
    name: "Rattatac",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392223183",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 127,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea0b",
    },
    id: 21,
    name: "Piafabec",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392223330",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea0e",
    },
    id: 22,
    name: "Rapasdepic",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392223464",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea11",
    },
    id: 23,
    name: "Abo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392223594",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea14",
    },
    id: 24,
    name: "Arbok",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392223735",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90e9f11256025f5c3ea17",
    },
    id: 25,
    name: "Pikachu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    shiny: false,
    types: ["electric"],
    createdAt: {
      $date: {
        $numberLong: "1658392223864",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea011256025f5c3ea1b",
    },
    id: 26,
    name: "Raichu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    shiny: false,
    types: ["electric"],
    createdAt: {
      $date: {
        $numberLong: "1658392224479",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea011256025f5c3ea1d",
    },
    id: 27,
    name: "Sabelette",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    shiny: false,
    types: ["ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392224585",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea011256025f5c3ea1f",
    },
    id: 28,
    name: "Sablaireau",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    shiny: false,
    types: ["ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392224686",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea011256025f5c3ea23",
    },
    id: 29,
    name: "Nidoran♀",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392224820",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 235,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea011256025f5c3ea26",
    },
    id: 30,
    name: "Nidorina",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392224943",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea29",
    },
    id: 31,
    name: "Nidoqueen",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    shiny: false,
    types: ["poison", "ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392225048",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea2c",
    },
    id: 32,
    name: "Nidoran♂",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392225183",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 235,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea2f",
    },
    id: 33,
    name: "Nidorino",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392225291",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea32",
    },
    id: 34,
    name: "Nidoking",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    shiny: false,
    types: ["poison", "ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392225399",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea35",
    },
    id: 35,
    name: "Mélofée",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    shiny: false,
    types: ["fairy"],
    createdAt: {
      $date: {
        $numberLong: "1658392225557",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 150,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea38",
    },
    id: 36,
    name: "Mélodelfe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    shiny: false,
    types: ["fairy"],
    createdAt: {
      $date: {
        $numberLong: "1658392225704",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 25,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea3b",
    },
    id: 37,
    name: "Goupix",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392225831",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea111256025f5c3ea3e",
    },
    id: 38,
    name: "Feunard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392225937",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 75,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea41",
    },
    id: 39,
    name: "Rondoudou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    shiny: false,
    types: ["normal", "fairy"],
    createdAt: {
      $date: {
        $numberLong: "1658392226066",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 170,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea44",
    },
    id: 40,
    name: "Grodoudou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    shiny: false,
    types: ["normal", "fairy"],
    createdAt: {
      $date: {
        $numberLong: "1658392226260",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 50,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea47",
    },
    id: 41,
    name: "Nosferapti",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    shiny: false,
    types: ["poison", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392226395",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea49",
    },
    id: 42,
    name: "Nosferalto",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    shiny: false,
    types: ["poison", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392226510",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea4d",
    },
    id: 43,
    name: "Mystherbe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392226628",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 255,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea50",
    },
    id: 44,
    name: "Ortide",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392226738",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea53",
    },
    id: 45,
    name: "Rafflesia",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392226856",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea211256025f5c3ea56",
    },
    id: 46,
    name: "Paras",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    shiny: false,
    types: ["bug", "grass"],
    createdAt: {
      $date: {
        $numberLong: "1658392226973",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea59",
    },
    id: 47,
    name: "Parasect",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    shiny: false,
    types: ["bug", "grass"],
    createdAt: {
      $date: {
        $numberLong: "1658392227091",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 75,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea5c",
    },
    id: 48,
    name: "Mimitoss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    shiny: false,
    types: ["bug", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392227196",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea5f",
    },
    id: 49,
    name: "Aéromite",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    shiny: false,
    types: ["bug", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392227335",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea62",
    },
    id: 50,
    name: "Taupiqueur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    shiny: false,
    types: ["ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392227440",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea65",
    },
    id: 51,
    name: "Triopikeur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    shiny: false,
    types: ["ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392227556",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 50,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea68",
    },
    id: 52,
    name: "Miaouss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392227660",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea6b",
    },
    id: 53,
    name: "Persian",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392227778",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea311256025f5c3ea6d",
    },
    id: 54,
    name: "Psykokwak",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392227889",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea411256025f5c3ea71",
    },
    id: 55,
    name: "Akwakwak",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392228241",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea411256025f5c3ea74",
    },
    id: 56,
    name: "Férosinge",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392228375",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea411256025f5c3ea77",
    },
    id: 57,
    name: "Colossinge",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392228485",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea411256025f5c3ea7a",
    },
    id: 58,
    name: "Caninos",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392228628",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea411256025f5c3ea7d",
    },
    id: 59,
    name: "Arcanin",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392228751",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea511256025f5c3ea81",
    },
    id: 60,
    name: "Ptitard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392229240",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea511256025f5c3ea83",
    },
    id: 61,
    name: "Têtarte",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392229384",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea511256025f5c3ea86",
    },
    id: 62,
    name: "Tartard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    shiny: false,
    types: ["water", "fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392229490",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea511256025f5c3ea89",
    },
    id: 63,
    name: "Abra",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392229624",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 200,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea511256025f5c3ea8c",
    },
    id: 64,
    name: "Kadabra",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392229755",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 100,
  },
  {
    _id: {
      $oid: "62d90ea611256025f5c3ea90",
    },
    id: 65,
    name: "Alakazam",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392230251",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 50,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea611256025f5c3ea92",
    },
    id: 66,
    name: "Machoc",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392230357",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 180,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea611256025f5c3ea94",
    },
    id: 67,
    name: "Machopeur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392230469",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea611256025f5c3ea98",
    },
    id: 68,
    name: "Mackogneur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392230570",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea711256025f5c3ea9c",
    },
    id: 69,
    name: "Chétiflor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392231051",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea711256025f5c3ea9e",
    },
    id: 70,
    name: "Boustiflor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392231174",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea711256025f5c3eaa1",
    },
    id: 71,
    name: "Empiflor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    shiny: false,
    types: ["grass", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392231276",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea711256025f5c3eaa4",
    },
    id: 72,
    name: "Tentacool",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    shiny: false,
    types: ["water", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392231384",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea711256025f5c3eaa7",
    },
    id: 73,
    name: "Tentacruel",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    shiny: false,
    types: ["water", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392231513",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea711256025f5c3eaa9",
    },
    id: 74,
    name: "Racaillou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    shiny: false,
    types: ["rock", "ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392231626",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea811256025f5c3eaae",
    },
    id: 75,
    name: "Gravalanch",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    shiny: false,
    types: ["rock", "ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392232108",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea811256025f5c3eab1",
    },
    id: 76,
    name: "Grolem",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    shiny: false,
    types: ["rock", "ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392232616",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea811256025f5c3eab3",
    },
    id: 77,
    name: "Ponyta",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392232722",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea811256025f5c3eab6",
    },
    id: 78,
    name: "Galopa",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392232848",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea811256025f5c3eab9",
    },
    id: 79,
    name: "Ramoloss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    shiny: false,
    types: ["water", "psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392232955",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eabb",
    },
    id: 80,
    name: "Flagadoss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    shiny: false,
    types: ["water", "psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392233126",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 75,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eabe",
    },
    id: 81,
    name: "Magnéti",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    shiny: false,
    types: ["electric", "steel"],
    createdAt: {
      $date: {
        $numberLong: "1658392233248",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eac1",
    },
    id: 82,
    name: "Magnéton",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    shiny: false,
    types: ["electric", "steel"],
    createdAt: {
      $date: {
        $numberLong: "1658392233371",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eac4",
    },
    id: 83,
    name: "Canarticho",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392233494",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eac7",
    },
    id: 84,
    name: "Doduo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392233605",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eaca",
    },
    id: 85,
    name: "Dodrio",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    shiny: false,
    types: ["normal", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392233721",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3eacd",
    },
    id: 86,
    name: "Otaria",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392233862",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ea911256025f5c3ead0",
    },
    id: 87,
    name: "Lamantine",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    shiny: false,
    types: ["water", "ice"],
    createdAt: {
      $date: {
        $numberLong: "1658392233969",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaa11256025f5c3ead3",
    },
    id: 88,
    name: "Tadmorv",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392234106",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaa11256025f5c3ead7",
    },
    id: 89,
    name: "Grotadmorv",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392234328",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaa11256025f5c3ead9",
    },
    id: 90,
    name: "Kokiyas",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392234440",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaa11256025f5c3eadd",
    },
    id: 91,
    name: "Crustabri",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    shiny: false,
    types: ["water", "ice"],
    createdAt: {
      $date: {
        $numberLong: "1658392234555",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eab11256025f5c3eae0",
    },
    id: 92,
    name: "Fantominus",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    shiny: false,
    types: ["ghost", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392235057",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eab11256025f5c3eae2",
    },
    id: 93,
    name: "Spectrum",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    shiny: false,
    types: ["ghost", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392235163",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eab11256025f5c3eae5",
    },
    id: 94,
    name: "Ectoplasma",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    shiny: false,
    types: ["ghost", "poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392235280",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eab11256025f5c3eaea",
    },
    id: 95,
    name: "Onix",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    shiny: false,
    types: ["rock", "ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392235763",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eab11256025f5c3eaec",
    },
    id: 96,
    name: "Soporifik",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392235873",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eab11256025f5c3eaef",
    },
    id: 97,
    name: "Hypnomade",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392235992",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eaf2",
    },
    id: 98,
    name: "Krabby",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392236096",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 225,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eaf5",
    },
    id: 99,
    name: "Krabboss",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392236205",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eaf9",
    },
    id: 100,
    name: "Voltorbe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    shiny: false,
    types: ["electric"],
    createdAt: {
      $date: {
        $numberLong: "1658392236397",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eafb",
    },
    id: 101,
    name: "Électrode",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    shiny: false,
    types: ["electric"],
    createdAt: {
      $date: {
        $numberLong: "1658392236522",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eafe",
    },
    id: 102,
    name: "Noeunoeuf",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    shiny: false,
    types: ["grass", "psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392236635",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 90,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eb01",
    },
    id: 103,
    name: "Noadkoko",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    shiny: false,
    types: ["grass", "psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392236757",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eb03",
    },
    id: 104,
    name: "Osselait",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    shiny: false,
    types: ["ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392236866",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eac11256025f5c3eb06",
    },
    id: 105,
    name: "Ossatueur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    shiny: false,
    types: ["ground"],
    createdAt: {
      $date: {
        $numberLong: "1658392236971",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ead11256025f5c3eb0a",
    },
    id: 106,
    name: "Kicklee",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392237080",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ead11256025f5c3eb0c",
    },
    id: 107,
    name: "Tygnon",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    shiny: false,
    types: ["fighting"],
    createdAt: {
      $date: {
        $numberLong: "1658392237183",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ead11256025f5c3eb0e",
    },
    id: 108,
    name: "Excelangue",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392237310",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ead11256025f5c3eb11",
    },
    id: 109,
    name: "Smogo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392237432",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 190,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90ead11256025f5c3eb17",
    },
    id: 110,
    name: "Smogogo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    shiny: false,
    types: ["poison"],
    createdAt: {
      $date: {
        $numberLong: "1658392237895",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eae11256025f5c3eb1a",
    },
    id: 111,
    name: "Rhinocorne",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    shiny: false,
    types: ["ground", "rock"],
    createdAt: {
      $date: {
        $numberLong: "1658392238371",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 120,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eae11256025f5c3eb1c",
    },
    id: 112,
    name: "Rhinoféros",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    shiny: false,
    types: ["ground", "rock"],
    createdAt: {
      $date: {
        $numberLong: "1658392238490",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eae11256025f5c3eb1f",
    },
    id: 113,
    name: "Leveinard",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392238599",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 30,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eae11256025f5c3eb21",
    },
    id: 114,
    name: "Saquedeneu",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    shiny: false,
    types: ["grass"],
    createdAt: {
      $date: {
        $numberLong: "1658392238724",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eae11256025f5c3eb25",
    },
    id: 115,
    name: "Kangourex",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392238832",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eae11256025f5c3eb28",
    },
    id: 116,
    name: "Hypotrempe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392238964",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 225,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb2b",
    },
    id: 117,
    name: "Hypocéan",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392239081",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 75,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb2d",
    },
    id: 118,
    name: "Poissirène",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392239197",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 225,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb30",
    },
    id: 119,
    name: "Poissoroy",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392239306",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb34",
    },
    id: 120,
    name: "Stari",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392239470",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 225,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb37",
    },
    id: 121,
    name: "Staross",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    shiny: false,
    types: ["water", "psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392239606",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 60,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb3a",
    },
    id: 122,
    name: "M. Mime",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    shiny: false,
    types: ["psychic", "fairy"],
    createdAt: {
      $date: {
        $numberLong: "1658392239732",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb3d",
    },
    id: 123,
    name: "Insécateur",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    shiny: false,
    types: ["bug", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392239885",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eaf11256025f5c3eb40",
    },
    id: 124,
    name: "Lippoutou",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    shiny: false,
    types: ["ice", "psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392239987",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb011256025f5c3eb43",
    },
    id: 125,
    name: "Élektek",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    shiny: false,
    types: ["electric"],
    createdAt: {
      $date: {
        $numberLong: "1658392240104",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb011256025f5c3eb48",
    },
    id: 126,
    name: "Magmar",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392240624",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb011256025f5c3eb4a",
    },
    id: 127,
    name: "Scarabrute",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    shiny: false,
    types: ["bug"],
    createdAt: {
      $date: {
        $numberLong: "1658392240737",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb011256025f5c3eb4d",
    },
    id: 128,
    name: "Tauros",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392240851",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb011256025f5c3eb50",
    },
    id: 129,
    name: "Magicarpe",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392240962",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 255,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb111256025f5c3eb54",
    },
    id: 130,
    name: "Léviator",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    shiny: false,
    types: ["water", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392241067",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb111256025f5c3eb56",
    },
    id: 131,
    name: "Lokhlass",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    shiny: false,
    types: ["water", "ice"],
    createdAt: {
      $date: {
        $numberLong: "1658392241176",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb111256025f5c3eb59",
    },
    id: 132,
    name: "Métamorph",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392241281",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 35,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb111256025f5c3eb5d",
    },
    id: 133,
    name: "Évoli",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392241395",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb111256025f5c3eb60",
    },
    id: 134,
    name: "Aquali",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    shiny: false,
    types: ["water"],
    createdAt: {
      $date: {
        $numberLong: "1658392241905",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catched: false,
    catchRate: 45,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb62",
    },
    id: 135,
    name: "Voltali",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    shiny: false,
    types: ["electric"],
    createdAt: {
      $date: {
        $numberLong: "1658392242011",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb65",
    },
    id: 136,
    name: "Pyroli",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    shiny: false,
    types: ["fire"],
    createdAt: {
      $date: {
        $numberLong: "1658392242130",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb68",
    },
    id: 137,
    name: "Porygon",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392242245",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb6b",
    },
    id: 138,
    name: "Amonita",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    shiny: false,
    types: ["rock", "water"],
    createdAt: {
      $date: {
        $numberLong: "1658392242361",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb6d",
    },
    id: 139,
    name: "Amonistar",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    shiny: false,
    types: ["rock", "water"],
    createdAt: {
      $date: {
        $numberLong: "1658392242476",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb70",
    },
    id: 140,
    name: "Kabuto",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    shiny: false,
    types: ["rock", "water"],
    createdAt: {
      $date: {
        $numberLong: "1658392242591",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb73",
    },
    id: 141,
    name: "Kabutops",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    shiny: false,
    types: ["rock", "water"],
    createdAt: {
      $date: {
        $numberLong: "1658392242697",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb76",
    },
    id: 142,
    name: "Ptéra",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    shiny: false,
    types: ["rock", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392242808",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb211256025f5c3eb78",
    },
    id: 143,
    name: "Ronflex",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    shiny: false,
    types: ["normal"],
    createdAt: {
      $date: {
        $numberLong: "1658392242921",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 25,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb311256025f5c3eb7d",
    },
    id: 144,
    name: "Artikodin",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    shiny: false,
    types: ["ice", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392243038",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 3,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb311256025f5c3eb80",
    },
    id: 145,
    name: "Électhor",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    shiny: false,
    types: ["electric", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392243148",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 3,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb311256025f5c3eb83",
    },
    id: 146,
    name: "Sulfura",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    shiny: false,
    types: ["fire", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392243258",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 3,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb311256025f5c3eb86",
    },
    id: 147,
    name: "Minidraco",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    shiny: false,
    types: ["dragon"],
    createdAt: {
      $date: {
        $numberLong: "1658392243380",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb311256025f5c3eb8a",
    },
    id: 148,
    name: "Draco",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    shiny: false,
    types: ["dragon"],
    createdAt: {
      $date: {
        $numberLong: "1658392243496",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb311256025f5c3eb8d",
    },
    id: 149,
    name: "Dracolosse",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    shiny: false,
    types: ["dragon", "flying"],
    createdAt: {
      $date: {
        $numberLong: "1658392243597",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1660813468108",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb411256025f5c3eb91",
    },
    id: 150,
    name: "Mewtwo",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392244173",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 3,
    catched: false,
  },
  {
    _id: {
      $oid: "62d90eb411256025f5c3eb93",
    },
    id: 151,
    name: "Mew",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    shiny: false,
    types: ["psychic"],
    createdAt: {
      $date: {
        $numberLong: "1658392244278",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661264962725",
      },
    },
    __v: 0,
    catchRate: 45,
    catched: false,
  },
];

module.exports = pokemons;
