const types = {
    water: 'images/pkmn-type/water.png', 
    bug: 'images/pkmn-type/bug.png',
    dark: 'images/pkmn-type/dark.png',
    dragon: 'images/pkmn-type/dragon.png',
    electric: 'images/pkmn-type/electric.png',
    fairy: 'images/pkmn-type/fairy.png',
    fighting: 'images/pkmn-type/fighting.png',
    fire: 'images/pkmn-type/fire.png',
    flying: 'images/pkmn-type/flying.png',
    ghost: 'images/pkmn-type/ghost.png',
    grass: 'images/pkmn-type/grass.png',
    ground: 'images/pkmn-type/ground.png',
    ice: 'images/pkmn-type/ice.png',
    normal: 'images/pkmn-type/normal.png',
    poison: 'images/pkmn-type/poison.png',
    psychic: 'images/pkmn-type/psychic.png',
    rock: 'images/pkmn-type/rock.png',
    steel: 'images/pkmn-type/steel.png',
};

const pokemons = [
    {
        num: '001',
        name: 'COATTINY',
        img: 'images/pkmn-img/001.png',
        category: 'Quati',
        ability: 'Overgrow',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass],
    },
    {
        num: '002',
        name: 'COATTHIEF',
        img: 'images/pkmn-img/002.png',
        category: 'Quati',
        ability: 'Overgrow',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '003',
        name: 'SAQUACYN',
        img: 'images/pkmn-img/003.png',
        category: 'Hunter',
        ability: 'Overgrow',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '004',
        name: 'EMBRITO',
        img: 'images/pkmn-img/004.png',
        category: 'Fawn',
        ability: 'Blaze',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fire],
    },
    {
        num: '005',
        name: 'FLAMPIPE',
        img: 'images/pkmn-img/005.png',
        category: 'Fire Goat',
        ability: 'Blaze',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fire],
    },
    {
        num: '006',
        name: 'MOTORAAM',
        img: 'images/pkmn-img/006.png',
        category: 'Fire Goat',
        ability: 'Blaze',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fire, types.steel],
    },
    {
        num: '007',
        name: 'GUAMIRIN',
        img: 'images/pkmn-img/007.png',
        category: 'Tiny Crab',
        ability: 'Torrent',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water],
    },
    {
        num: '008',
        name: 'GUAIAMURI',
        img: 'images/pkmn-img/008.png',
        category: 'Guaiamum',
        ability: 'Torrent',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water],
    },
    {
        num: '009',
        name: 'PATAIAMUM',
        img: 'images/pkmn-img/009.png',
        category: 'Guaiamum',
        ability: 'Torrent',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.ground],
    },
    {
        num: '010',
        name: 'APEGUI',
        img: 'images/pkmn-img/010.png',
        category: 'Small Monkey',
        ability: 'Pickup',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal],
    },
    {
        num: '011',
        name: 'APEVOLT',
        img: 'images/pkmn-img/011.png',
        category: 'Golden',
        ability: 'Volt Absorb',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.electric],
    },
    {
        num: '012',
        name: 'VEEKRESS',
        img: 'images/pkmn-img/012.png',
        category: 'Bird',
        ability: 'Big Pecks/Moxie',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.flying, types.normal],
    },
    {
        num: '013',
        name: 'GAVKRESS',
        img: 'images/pkmn-img/013.png',
        category: 'Hawk',
        ability: 'Big Pecks/Moxie',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.flying, types.fighting],
    },
    {
        num: '014',
        name: 'HAWKRESS',
        img: 'images/pkmn-img/014.png',
        category: 'Hawk',
        ability: 'Big Pecks/Moxie',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.flying, types.fighting],
    },
    {
        num: '015',
        name: 'SARUREK',
        img: 'images/pkmn-img/015.png',
        category: 'Opossum',
        ability: 'Reckless',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal, types.dark],
    },
    {
        num: '016',
        name: 'SAREGURO',
        img: 'images/pkmn-img/016.png',
        category: 'Opossum',
        ability: 'Reckless',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal, types.dark],
    },
    {
        num: '017',
        name: 'PICHU',
        form: 'Regional Form',
        img: 'images/pkmn-img/017.png',
        category: 'Mouse',
        ability: 'Lighting Rod',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.electric, types.normal],
    },
    {
        num: '018',
        name: 'PIKACHU',
        form: 'Regional Form',
        img: 'images/pkmn-img/018.png',
        category: 'Mouse',
        ability: 'Lighting Rod',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.electric, types.normal],
    },
    {
        num: '019',
        name: 'KAICHU',
        img: 'images/pkmn-img/019.png',
        category: 'Thunder',
        ability: 'Lighting Rod',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.electric, types.fighting],
    },
    {
        num: '020',
        name: 'CAJUBI',
        img: 'images/pkmn-img/020.png',
        category: 'Caju',
        ability: 'Harvest',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass],
    },
    {
        num: '021',
        name: 'MACARAJU',
        img: 'images/pkmn-img/021.png',
        category: 'Aracaju',
        ability: 'Harvest',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass, types.flying],
    },
    {
        num: '022',
        name: 'BELLSPROUT',
        img: 'images/pkmn-img/022.png',
        category: 'Flower',
        ability: 'Chlorophyll',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass, types.poison],
    },
    {
        num: '023',
        name: 'WEEPINBELL',
        form: 'Regional Form',
        img: 'images/pkmn-img/023.png',
        category: 'Toxic Flower',
        ability: 'Chlorophyll',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '024',
        name: 'TOXXIBELL',
        img: 'images/pkmn-img/024.png',
        category: 'Toxic Flower',
        ability: 'Chlorophyll',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '025',
        name: 'JACIENNA',
        img: 'images/pkmn-img/025.png',
        category: 'Water Bird',
        ability: 'Run Away',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '026',
        name: 'GARCIENNA',
        img: 'images/pkmn-img/026.png',
        category: 'Mean Bird',
        ability: 'Intimidate',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dark, types.flying],
    },
    {
        num: '027',
        name: 'DUNDUCLE',
        img: 'images/pkmn-img/027.png',
        category: 'Duck',
        ability: 'Tangled Feet',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.flying],
    },
    {
        num: '028',
        name: 'PADDUCLE',
        img: 'images/pkmn-img/028.png',
        category: 'Carrier',
        ability: 'Big Pecks',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.flying],
    },
    {
        num: '029',
        name: 'STARTICK',
        img: 'images/pkmn-img/029.png',
        category: 'Red Star',
        ability: 'Poison Point',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison],
    },
    {
        num: '030',
        name: 'ARAMARON',
        img: 'images/pkmn-img/030.png',
        category: 'Thread',
        ability: 'Merciless',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison, types.psychic],
    },
    {
        num: '031',
        name: 'JUNSPION',
        img: 'images/pkmn-img/031.png',
        category: 'Stinger',
        ability: 'Merciless',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison, types.fighting],
    },
    {
        num: '032',
        name: 'COROCHI',
        img: 'images/pkmn-img/032.png',
        category: 'Roach',
        ability: 'Run Away',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug, types.normal],
    },
    {
        num: '033',
        name: 'CACOROCHI',
        img: 'images/pkmn-img/033.png',
        category: 'Super Roach',
        ability: 'Toxic Boost',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug, types.ground],
    },
    {
        num: '034',
        name: 'BUDSLY',
        img: 'images/pkmn-img/034.png',
        category: 'Bud',
        ability: 'Leaf Guard',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass],
    },
    {
        num: '035',
        name: 'TRULYWOODO',
        img: 'images/pkmn-img/035.png',
        category: 'Gardner',
        ability: 'Green Thumb',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass],
    },
    {
        num: '036',
        name: 'TAGUARIN',
        img: 'images/pkmn-img/036.png',
        category: 'Ocelot',
        ability: 'Run Away',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fire],
    },
    {
        num: '037',
        name: 'SIRENBY',
        img: 'images/pkmn-img/037.png',
        category: 'Manatee',
        ability: 'Sap Sipper/Thick Fat',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water],
    },
    {
        num: '038',
        name: 'SIRENIA',
        img: 'images/pkmn-img/038.png',
        category: 'Manatee',
        ability: 'Sap Sipper/Thick Fat',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.ice],
    },
    {
        num: '039',
        name: 'SMIRGATOR',
        img: 'images/pkmn-img/039.png',
        category: 'Alligator',
        ability: 'Intimidate/Anger Point',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.dark],
    },
    {
        num: '040',
        name: 'MANTYKE',
        img: 'images/pkmn-img/040.png',
        category: 'Kite',
        ability: 'Swift Swim/Water Absorb',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '041',
        name: 'MANTINE',
        img: 'images/pkmn-img/041.png',
        category: 'Kite',
        ability: 'Swift Swim/Water Absorb',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '042',
        name: 'MANKYTE',
        img: 'images/pkmn-img/042.png',
        category: 'Kite',
        ability: 'Swift Swim/Water Absorb',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '043',
        name: 'SHRIMBODY',
        img: 'images/pkmn-img/043.png',
        category: 'Shrimp',
        ability: 'Weak Armor',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ground, types.water],
    },
    {
        num: '044',
        name: 'SHRIMRYU',
        img: 'images/pkmn-img/044.png',
        category: 'Pitu Shrimp',
        ability: 'Shell Armor',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon, types.water],
    },
    {
        num: '045',
        name: 'HORSEA',
        img: 'images/pkmn-img/045.png',
        category: 'Dragon',
        ability: 'Swift Swim/Sniper',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon, types.water],
    },
    {
        num: '046',
        name: 'SEADRA',
        img: 'images/pkmn-img/046.png',
        category: 'Dragon',
        ability: 'Swift Swim/Sniper',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon, types.water],
    },
    {
        num: '047',
        name: 'DRACEAN',
        img: 'images/pkmn-img/047.png',
        category: 'Dragon',
        ability: 'Swift Swim/Intimidate',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon, types.dark],
    },
    {
        num: '048',
        name: 'TAMARTLE',
        img: 'images/pkmn-img/048.png',
        category: 'Turtle',
        ability: 'Sturdy',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water],
    },
    {
        num: '049',
        name: 'COURAPAGOS',
        img: 'images/pkmn-img/049.png',
        category: 'Hard Shell',
        ability: 'Sturdy',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.steel, types.water],
    },
    {
        num: '050',
        name: 'TENTACOOL',
        form: 'Regional Form',
        img: 'images/pkmn-img/050.png',
        category: 'Jellyfish',
        ability: 'Poison Point/Static',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison, types.electric],
    },
    {
        num: '051',
        name: 'TENTAOWAR',
        img: 'images/pkmn-img/051.png',
        category: 'Jellyfish',
        ability: 'Poison Point/Static',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.poison, types.electric],
    },
    {
        num: '052',
        name: 'ANKUSHAK',
        img: 'images/pkmn-img/052.png',
        category: 'Ancor',
        ability: 'Strong Jaw',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.steel],
    },
    {
        num: '053',
        name: 'CUMBULLUS',
        img: 'images/pkmn-img/053.png',
        category: 'Cloud',
        ability: 'Cloud Nine',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fairy],
    },
    {
        num: '054',
        name: 'NUVECIAN',
        img: 'images/pkmn-img/054.png',
        category: 'Stormy Cloud',
        ability: 'Wind Power',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fairy, types.electric],
    },
    {
        num: '055',
        name: 'STRATERIM',
        img: 'images/pkmn-img/055.png',
        category: 'Sunny Cloud',
        ability: 'Wind Power',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fairy, types.fire],
    },
    {
        num: '056',
        name: 'EEVEE',
        img: 'images/pkmn-img/056.png',
        category: 'Evolution',
        ability: 'Run Away/Adaptability',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal],
    },
    {
        num: '057',
        name: 'ACEREON',
        img: 'images/pkmn-img/057.png',
        category: 'Armor',
        ability: 'Battle Armor',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.steel],
    },
    {
        num: '058',
        name: 'SPECTREON',
        img: 'images/pkmn-img/058.png',
        category: 'Melancolic',
        ability: 'Insomnia',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ghost],
    },
    {
        num: '059',
        name: 'DRACAREON',
        img: 'images/pkmn-img/059.png',
        category: 'Scally',
        ability: 'Shed Skin',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon],
    },
    {
        num: '060',
        name: 'OMYNEON',
        img: 'images/pkmn-img/060.png',
        category: 'Miracle',
        ability: 'Adaptability',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal],
    },
    {
        num: '061',
        name: 'MURIMIZU',
        img: 'images/pkmn-img/061.png',
        category: 'Vessel',
        ability: 'Water Veil',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water],
    },
    {
        num: '062',
        name: 'MIZUCLAY',
        img: 'images/pkmn-img/062.png',
        category: 'Vessel',
        ability: 'Water Absorb',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water] ,
    },
    {
        num: '063',
        name: 'AZURILL',
        img: 'images/pkmn-img/063.png',
        category: 'Polka Dot',
        ability: 'Thick Fat/Huge Power',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal, types.fairy],
    },
    {
        num: '064',
        name: 'MARILL',
        img: 'images/pkmn-img/064.png',
        category: 'Punching',
        ability: 'Iron Fist/Huge Power',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fighting, types.fairy],
    },
    {
        num: '065',
        name: 'PINKURILL',
        img: 'images/pkmn-img/065.png',
        category: 'Punching',
        ability: 'Iron Fist/Huge Power',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fighting, types.fairy],
    },
    {
        num: '066',
        name: 'BRIEBBLE',
        img: 'images/pkmn-img/066.png',
        category: 'Pebble',
        ability: 'Sturdy',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.rock],
    },
    {
        num: '067',
        name: 'ITA',
        img: 'images/pkmn-img/067.png',
        category: 'Rock',
        ability: 'Sturdy',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.rock],
    },
    {
        num: '068',
        name: 'PAVEGMENT',
        img: 'images/pkmn-img/068.png',
        category: 'Street Rock',
        ability: 'Sturdy',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.rock, types.poison],
    },
    {
        num: '069',
        name: 'DRIFLOON',
        img: 'images/pkmn-img/069.png',
        category: 'Ballon',
        ability: 'Flare Boost',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ghost, types.fire],
    },
    {
        num: '070',
        name: 'DRIFBLIM',
        img: 'images/pkmn-img/070.png',
        category: 'Ballon',
        ability: 'Flare Boost',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ghost, types.fire],
    },
    {
        num: '071',
        name: 'ERIRÉ',
        img: 'images/pkmn-img/071.png',
        category: 'Entity',
        ability: 'Anticipation',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.psychic],
    },
    {
        num: '072',
        name: 'ERIXÁ',
        img: 'images/pkmn-img/072.png',
        category: 'Entity',
        ability: 'Anticipation',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.psychic],
    },
    {
        num: '073',
        name: 'OXIRÁ',
        img: 'images/pkmn-img/073.png',
        category: 'Entity',
        ability: 'Justified',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.psychic, types.fighting],
    },
    {
        num: '074',
        name: 'ROSAGARTA',
        img: 'images/pkmn-img/074.png',
        category: 'Larva',
        ability: 'Shed Skin',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug],
    },
    {
        num: '075',
        name: 'HESALYDA',
        img: 'images/pkmn-img/075.png',
        category: 'Chrysalis',
        ability: 'Shed Skin',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug],
    },
    {
        num: '076',
        name: 'FLUTTYROSA',
        img: 'images/pkmn-img/076.png',
        category: 'Mariposa',
        ability: 'Dazzling',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug, types.psychic],
    },
    {
        num: '077',
        name: 'GYMNER',
        img: 'images/pkmn-img/077.png',
        category: 'Flower Seed',
        ability: 'Cute Charm',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass],
    },
    {
        num: '078',
        name: 'GYMMERINA',
        img: 'images/pkmn-img/078.png',
        category: 'Flower',
        ability: 'Flower Veil',
        pokemonTypes: [types.grass, types.fairy],
    },
    {
        num: '079',
        name: 'CACTTARU',
        img: 'images/pkmn-img/079.png',
        category: 'Fruit',
        ability: 'Iron Barbs',
        pokemonTypes: [types.grass],
    },
    {
        num: '080',
        name: 'MANCACTTARU',
        img: 'images/pkmn-img/080.png',
        category: 'Cactus',
        ability: 'Iron Barbs',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass, types.psychic],
    },
    {
        num: '081',
        name: 'SCYTHER',
        img: 'images/pkmn-img/081.png',
        category: 'Mantis',
        ability: 'Default',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug, types.dragon],
    },
    {
        num: '082',
        name: 'DEFAULT',
        img: 'images/pkmn-img/082.png',
        category: 'Default',
        ability: 'Default',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.bug, types.dragon],
    },
    {
        num: '083',
        name: 'CALFLING',
        img: 'images/pkmn-img/083.png',
        category: 'Calf',
        ability: 'Thick Fat/Scrappy',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal],
    },
    {
        num: '084',
        name: 'MILTANK',
        img: 'images/pkmn-img/084.png',
        category: 'Milk Cow',
        ability: 'Thick Fat/Cud Chew',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal, types.ground],
    },
    {
        num: '085',
        name: 'TAURUS',
        img: 'images/pkmn-img/085.png',
        category: 'Farm Bull',
        ability: 'Cud Chew/Moxie',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal, types.ground],
    },
    {
        num: '086',
        name: 'NELLAUROS',
        img: 'images/pkmn-img/086.png',
        category: 'Rodeo Bull',
        ability: 'Cud Chew/Moxie',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fighting, types.ground],
    },
    {
        num: '087',
        name: 'DEFAULT',
        img: 'images/pkmn-img/087.png',
        category: 'Apparition',
        ability: 'Night Veil',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ghost, types.water],
    },
    {
        num: '088',
        name: 'OWSCURUS',
        img: 'images/pkmn-img/088.png',
        category: 'Apparition',
        ability: 'Night Veil',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ghost, types.flying],
    },
    {
        num: '089',
        name: 'SKARRANKA',
        img: 'images/pkmn-img/089.png',
        category: 'Apparition',
        ability: 'Night Veil',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ghost, types.dark],
    },
    {
        num: '090',
        name: 'DEFAULT',
        img: 'images/pkmn-img/placeholder.png',
        category: 'Default',
        ability: 'Default',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal],
    },
    {
        num: '091',
        name: 'LARVITAR',
        img: 'images/pkmn-img/091.png',
        category: 'Rough Skin',
        ability: 'Rough Skin',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dark, types.ground],
    },
    {
        num: '092',
        name: 'CHRISALYTAR',
        img: 'images/pkmn-img/092.png',
        category: 'Chrysalis',
        ability: 'Rough Skin',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dark, types.ground],
    },
    {
        num: '093',
        name: 'INDOMITAR',
        img: 'images/pkmn-img/093.png',
        category: 'Indominable',
        ability: 'Rough Skin',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dark, types.poison],
    },
    {
        num: '094',
        name: 'TEIURIN',
        img: 'images/pkmn-img/094.png',
        category: 'Lizard',
        ability: 'Intimidate',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon],
    },
    {
        num: '095',
        name: 'TEIRUDON',
        img: 'images/pkmn-img/095.png',
        category: 'Lizard',
        ability: 'Intimidate',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon],
    },
    {
        num: '096',
        name: 'KALARUDON',
        img: 'images/pkmn-img/096.png',
        category: 'Lizard',
        ability: 'Intimidate',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dragon],
    },
    {
        num: '097',
        name: 'BAGSLITE',
        img: 'images/pkmn-img/097.png',
        category: 'Icebag',
        ability: 'Ice Body',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ice],
    },
    {
        num: '098',
        name: 'POPSILLITE',
        img: 'images/pkmn-img/098.png',
        category: 'Iceplate',
        ability: 'Ice Body',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ice],
    },
    {
        num: '099',
        name: 'DEFAULT',
        img: 'images/pkmn-img/placeholder.png',
        category: 'Default',
        ability: 'Default',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.normal],
    },
    {
        num: '100',
        name: 'MUNCHLAX',
        img: 'images/pkmn-img/100.png',
        category: 'Snowcave',
        ability: 'Snow Cloak/Gluttony',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ice],
    },
    {
        num: '101',
        name: 'SNORLAX',
        img: 'images/pkmn-img/101.png',
        category: 'Snowcave',
        ability: 'Snow Cloak/Gluttony',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.ice, types.ghost],
    },
    {
        num: '102',
        name: 'MAGIKING',
        img: 'images/pkmn-img/102.png',
        category: 'Ancestor',
        ability: 'Multiscale/Swift Swim',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.water, types.fighting],
    },
    {
        num: '103',
        name: 'DEFAULT',
        img: 'images/pkmn-img/103.png',
        category: 'Stray Dog',
        ability: 'Eternal Soul',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.dark],
    },
    {
        num: '104',
        name: 'DEFAULT',
        img: 'images/pkmn-img/104.png',
        category: 'Stray Cat',
        ability: 'Eternal Soul',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.psychic],
    },
    {
        num: '105',
        name: 'GRASSIBEX',
        img: 'images/pkmn-img/105.png',
        category: 'Abundance',
        ability: 'Evergreen',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.grass, types.water],
    },
    {
        num: '106',
        name: 'PHANTERRION',
        img: 'images/pkmn-img/106.png',
        category: 'Drought',
        ability: 'Desolation',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fire, types.ground],
    },
    {
        num: '107',
        name: 'WYSFLAMY',
        img: 'images/pkmn-img/107.png',
        category: 'Wisp',
        ability: 'Soul Fuel',
        height: 'Default',
        weight: 'Default',
        pokemonTypes: [types.fire, types.fairy],
    },
];

const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".nav-close")
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", ()=>{
    if(nav.classList.contains("show-nav")){
        nav.classList.remove("show-nav");
    }
    else{
        nav.classList.add("show-nav");
    }
});

closeBtn.addEventListener("click", ()=>{
    nav.classList.remove("show-nav");
});

if (navigator.userAgent.indexOf('iPhone') > -1 ) {
    document.querySelector("[name=viewport]")
     .setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1");
}

const pkmnNum = document.querySelector(".pkmn-num");
const pkmnName = document.querySelector(".pkmn-name");
const pkmnImg = document.querySelector(".pkmn-img");
const pkmnCategory = document.querySelector(".pkmn-category");
const pkmnAbility = document.querySelector(".pkmn-ability");
const pkmnHeight = document.querySelector(".pkmn-height");
const pkmnWeight = document.querySelector(".pkmn-weight");
const pkmnType = document.querySelector(".pkmn-type--container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const searchInput = document.querySelector("#input-search");

let currentPkmn = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    const pkmnObj = pokemons[currentPkmn];
    pkmnImg.src = pkmnObj.img;
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnCategory.textContent = pkmnObj.category;
    pkmnAbility.textContent = pkmnObj.ability;
    pkmnHeight.textContent = pkmnObj.height;
    pkmnWeight.textContent = pkmnObj.weight;
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="pkmn-type">`
    })
    pkmnType.innerHTML += imgChild;
});

function showData(pkmn){
    const pkmnObj = pokemons[pkmn]
    pkmnImg.src = pkmnObj.img;
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnCategory.textContent = pkmnObj.category;
    pkmnAbility.textContent = pkmnObj.ability;
    pkmnHeight.textContent = pkmnObj.height;
    pkmnWeight.textContent = pkmnObj.weight;
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="pkmn-type">`
    })
    pkmnType.innerHTML = imgChild;
}

prevBtn.addEventListener("click", function(){
    currentPkmn--;
    if (currentPkmn < 0){
        currentPkmn = pokemons.length - 1;
    }
    showData(currentPkmn);
})

nextBtn.addEventListener("click", function(){
    currentPkmn++;
    if (currentPkmn > pokemons.length - 1){
        currentPkmn = 0;
    }
    showData(currentPkmn);
})

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if (isNaN(searchInput.value)){
            alert("Not a number");
        }
        if (searchInput.value > 107){
            alert("Not available")
        }
        let pkmnId = searchInput.value - 1;
        currentPkmn = pkmnId;
        showData(pkmnId);
        searchInput.value = "";
    } 
});