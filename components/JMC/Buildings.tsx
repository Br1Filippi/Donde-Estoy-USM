interface BuildingProps {
    id: string;
    name: string;
    coordinates: {
        latitude: number;
        longitude: number;
    }[];
    color: string;
}

const color = "#546E7ACC" 

const JMCBuildings: BuildingProps[] = [
    {
        id: "A",
        name: "Edificio A",
        coordinates: [
            {latitude: -33.036520, longitude: -71.486862 },
            {latitude: -33.036300, longitude: -71.486776 },
            {latitude: -33.036267, longitude: -71.486886 },
            {latitude: -33.036485, longitude: -71.486986 },
        ],
        color: color,
    },
    {
        id: "B1",
        name: "Edificio B",
        coordinates: [
            {latitude: -33.036614, longitude: -71.486693 },  
            {latitude: -33.036702, longitude: -71.486738 }, 
            {latitude: -33.036808, longitude: -71.486417 },  
            {latitude: -33.036718, longitude: -71.486371 },  
        ],
        color: color,
    },
    {
        id: "B2",
        name: "Edificio B",
        coordinates: [
            {latitude: -33.036659, longitude: -71.486420 },  
            {latitude: -33.036585, longitude: -71.486388 },  
            {latitude: -33.036486, longitude: -71.486683 },  
            {latitude: -33.036558, longitude: -71.486726 },  
        ],
        color: color,
    },
    {
        id: "C1",
        name: "Edificio C",
        coordinates: [
            {latitude: -33.036714, longitude: -71.486401 },
            {latitude: -33.036973, longitude: -71.485560 },
            {latitude: -33.037159, longitude: -71.485645 },
            {latitude: -33.037202, longitude: -71.485668 },
            {latitude: -33.036988, longitude: -71.486374 },
            {latitude: -33.037013, longitude: -71.486380 },
            {latitude: -33.036950, longitude: -71.486575 },
            {latitude: -33.036878, longitude: -71.486546 },
            {latitude: -33.036892, longitude: -71.486479 },
        ],
        color: color,
    },
    {
        id: "C2",
        name: "Edificio C",
        coordinates: [
            {latitude: -33.036676, longitude: -71.486385 },
            {latitude: -33.036496, longitude: -71.486310 },
            {latitude: -33.036743, longitude: -71.485508 },
            {latitude: -33.036876, longitude: -71.485564 },
            {latitude: -33.036838, longitude: -71.485698 },
            {latitude: -33.036890, longitude: -71.485717 },
        ],
        color: color,
    },
    {
        id: "C3",
        name: "Edificio C",
        coordinates: [
            {latitude: -33.037182, longitude: -71.485572 }, 
            {latitude: -33.037204, longitude: -71.485524 }, 
            {latitude: -33.037200, longitude: -71.485452 }, 
            {latitude: -33.037164, longitude: -71.485393 },  
            {latitude: -33.037119, longitude: -71.485369 },  
            {latitude: -33.037060, longitude: -71.485374 },  
            {latitude: -33.037013, longitude: -71.485420 }, 
            {latitude: -33.036982, longitude: -71.485487 },  
        ],
        color: color,
    },
    {
        id: "D",
        name: "Edificio D",
        coordinates: [
            {latitude: -33.036680, longitude: -71.487214 },
            {latitude: -33.036766, longitude: -71.486959 },
            {latitude: -33.036584, longitude: -71.486878 },
            {latitude: -33.036617, longitude: -71.486744 },
            {latitude: -33.036964, longitude: -71.486908 },
            {latitude: -33.036939, longitude: -71.487021 },
            {latitude: -33.036977, longitude: -71.487045 },
            {latitude: -33.036941, longitude: -71.487200 },
            {latitude: -33.037051, longitude: -71.487238 },
            {latitude: -33.036993, longitude: -71.487367 },
        ],
        color: color,
    },
    {
        id: "E",
        name: "Edificio E",
        coordinates: [
            {latitude: -33.036523, longitude: -71.487700 },
            {latitude: -33.036620, longitude: -71.487742 },
            {latitude: -33.036757, longitude: -71.487310 },
            {latitude: -33.036661, longitude: -71.487265 },
        ],
        color: color,
    },
    {
        id: "F",
        name: "Edificio F",
        coordinates: [
            {latitude: -33.036091, longitude: -71.487943 },
            {latitude: -33.036206, longitude: -71.487589 },
            {latitude: -33.036579, longitude: -71.487753 },
            {latitude: -33.036456, longitude: -71.488118 },
        ],
        color: color,
    },
    {
        id: "G",
        name: "Edificio G",
        coordinates: [
            {latitude: -33.036210, longitude: -71.487544 },
            {latitude: -33.036365, longitude: -71.487009 },
            {latitude: -33.036485, longitude: -71.487039 },
            {latitude: -33.036478, longitude: -71.487100 },
            {latitude: -33.036534, longitude: -71.487133 },
            {latitude: -33.036399, longitude: -71.487610 },
        ],
        color: color,
    },
    {
        id: "H1",
        name: "Edificio H",
        coordinates: [
            {latitude: -33.036134, longitude: -71.487157 },
            {latitude: -33.036037, longitude: -71.487114 },
            {latitude: -33.035833, longitude: -71.487801 },
            {latitude: -33.035925, longitude: -71.487847 },
        ],
        color: color,
    },
    {
        id: "H2",
        name: "Edificio H",
        coordinates: [
            {latitude: -33.035999, longitude: -71.487098 },
            {latitude: -33.035905, longitude: -71.487058 },
            {latitude: -33.035707, longitude: -71.487753 },
            {latitude: -33.035797, longitude: -71.487796 },
        ],
        color: color,
    },
    {
        id: "I",
        name: "Edificio I",
        coordinates: [
            {latitude: -33.037398, longitude: -71.485714 },
            {latitude: -33.037434, longitude: -71.485596 },
            {latitude: -33.037562, longitude: -71.485650 },
            {latitude: -33.037530, longitude: -71.485765 },
        ],
        color: color,
    },
    {
        id: "J",
        name: "Edificio J",
        coordinates: [
            {latitude: -33.036403, longitude: -71.485521 },
            {latitude: -33.036369, longitude: -71.485406 },
            {latitude: -33.036542, longitude: -71.485318 },
            {latitude: -33.036580, longitude: -71.485428 },
        ],
        color: color,
    },
    {
        id: "L",
        name: "Edificio L",
        coordinates: [
            {latitude: -33.036404, longitude: -71.487644 },
            {latitude: -33.036425, longitude: -71.487571 },
            {latitude: -33.036537, longitude: -71.487609 },
            {latitude: -33.036515, longitude: -71.487686 },
        ],
        color: color,
    },
    {
        id: "M",
        name: "Edificio M",
        coordinates: [
            {latitude: -33.036222, longitude: -71.485834 },
            {latitude: -33.036260, longitude: -71.485536 },
            {latitude: -33.036402, longitude: -71.485558 },
            {latitude: -33.036357, longitude: -71.485858 },
        ],
        color: color,
    },
    {
        id: "P",
        name: "Edificio P",
        coordinates: [
            {latitude: -33.036017, longitude: -71.486561 },
            {latitude: -33.035972, longitude: -71.486440 },
            {latitude: -33.036179, longitude: -71.486338 },
            {latitude: -33.036226, longitude: -71.486454 },
        ],
        color: color,
    },
    {
        id: "Q",
        name: "Edificio Q",
        coordinates: [
            {latitude: -33.036583, longitude: -71.485362 },
            {latitude: -33.036655, longitude: -71.485345 },
            {latitude: -33.036640, longitude: -71.485281 },
            {latitude: -33.036572, longitude: -71.485300 },
        ],
        color: color,
    },
    {
        id: "R",
        name: "Edificio R",
        coordinates: [
            {latitude: -33.035812, longitude: -71.487987 },
            {latitude: -33.035780, longitude: -71.488073 },
            {latitude: -33.036140, longitude: -71.488242 },
            {latitude: -33.036185, longitude: -71.488100 },
            {latitude: -33.035927, longitude: -71.487977 },
            {latitude: -33.035911, longitude: -71.488022 },
        ],
        color: color,
    },
    {
        id: "S",
        name: "Edificio S",
        coordinates: [
            {latitude: -33.037629, longitude: -71.485535 },
            {latitude: -33.037616, longitude: -71.485615 },
            {latitude: -33.037708, longitude: -71.485661 },
            {latitude: -33.037719, longitude: -71.485642 },
            {latitude: -33.037787, longitude: -71.485655 },
            {latitude: -33.037793, longitude: -71.485637 },
            {latitude: -33.037888, longitude: -71.485655 },
            {latitude: -33.037904, longitude: -71.485615 },
            {latitude: -33.038016, longitude: -71.485599 },
            {latitude: -33.038007, longitude: -71.485494 },
            {latitude: -33.037773, longitude: -71.485519 },
            {latitude: -33.037623, longitude: -71.485537 },
        ],
        color: color,
    },
    {
        id: "U",
        name: "Edificio U",
        coordinates: [
            {latitude: -33.037571, longitude: -71.485251 },
            {latitude: -33.037569, longitude: -71.485324 },
            {latitude: -33.037609, longitude: -71.485321 },
            {latitude: -33.037614, longitude: -71.485361 },
            {latitude: -33.037874, longitude: -71.485345 },
            {latitude: -33.037870, longitude: -71.485230 },
        ],
        color: color,
    },
    {
        id: "W",
        name: "Edificio W",
        coordinates: [
            {latitude: -33.037310, longitude: -71.485824 },
            {latitude: -33.037375, longitude: -71.485854 },
            {latitude: -33.037252, longitude: -71.486149 },
            {latitude: -33.037202, longitude: -71.486119 },
        ],
        color: color,
    },
    {
        id: "X",
        name: "Edificio X",
        coordinates: [
            {latitude: -33.039330, longitude: -71.485148 },
            {latitude: -33.039335, longitude: -71.485229 },
            {latitude: -33.039423, longitude: -71.485239 },
            {latitude: -33.039433, longitude: -71.485360 },
            {latitude: -33.039645, longitude: -71.485340 },
            {latitude: -33.039657, longitude: -71.485225 },
            {latitude: -33.039751, longitude: -71.485239 },
            {latitude: -33.039741, longitude: -71.485107 },
        ],
        color: color,
    }
]

export default JMCBuildings;