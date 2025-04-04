import { Marker } from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native';

interface WaypointProps {
    id: string;
    name: string;
    type: 'entrance' | 'waypoint' | 'building' | 'other';
    coordinates: {
        latitude: number;
        longitude: number;
    };
    shown: boolean;
}

const JMCWayPoints: WaypointProps[] = [
    {
        id: 'A',
        name: 'Edificio A',
        type: 'building',
        coordinates: {
            latitude: -33.036397,
            longitude: -71.486878,
        },
        shown: true,
    },
    {
        id: 'B',
        name: 'Edificio B',
        type: 'building',
        coordinates: {
            latitude: -33.036649,
            longitude: -71.486586,
        },
        shown: true,
    },
    {
        id: 'C1',
        name: 'Edificio C',
        type: 'building',
        coordinates: {
            latitude: -33.036955,
            longitude: -71.486009,
        },
        shown: true,
    },
    {
        id: 'C2',
        name: 'Edificio C',
        type: 'building',
        coordinates: {
            latitude: -33.036712,
            longitude: -71.485921,
        },
        shown: true,
    },
    {
        id: 'C3',
        name: 'Edificio C',
        type: 'building',
        coordinates: {
            latitude: -33.037117,
            longitude: -71.485489,
        },
        shown: true,
    },
    {
        id: 'D',
        name: 'Edificio D',
        type: 'building',
        coordinates: {
            latitude: -33.036831,
            longitude: -71.487149,
        },
        shown: true,
    },
    {
        id: 'E',
        name: 'Edificio E',
        type: 'building',
        coordinates: {
            latitude: -33.036658,
            longitude: -71.487527,
        },
        shown: true,
    },
    {
        id: 'F',
        name: 'Edificio F',
        type: 'building',
        coordinates: {
            latitude: -33.036330,
            longitude: -71.487892,
        },
        shown: true,
    },
    {
        id: 'G',
        name: 'Edificio G',
        type: 'building',
        coordinates: {
            latitude: -33.036370,
            longitude: -71.487348,
        },
        shown: true,
    },
    {
        id: 'H',
        name: 'Edificio H',
        type: 'building',
        coordinates: {
            latitude: -33.035907,
            longitude: -71.487471,
        },
        shown: true,
    },
    {
        id: 'I',
        name: 'Edificio I',
        type: 'building',
        coordinates: {
            latitude: -33.037488,
            longitude: -71.485682,
        },
        shown: true,
    },
    {
        id: 'J',
        name: 'Edificio J',
        type: 'building',
        coordinates: {
            latitude: -33.036480,
            longitude: -71.485425,
        },
        shown: true,
    },
    {
        id: 'L',
        name: 'Edificio L',
        type: 'building',
        coordinates: {
            latitude: -33.036471,
            longitude: -71.487629,
        },
        shown: true,
    },
    {
        id: 'M',
        name: 'Edificio M',
        type: 'building',
        coordinates: {
            latitude: -33.036314,
            longitude: -71.485682,
        },
        shown: true,
    },
    {
        id: 'P',
        name: 'Edificio P',
        type: 'building',
        coordinates: {
            latitude: -33.036094,
            longitude: -71.486447,
        },
        shown: true,
    },
    {
        id: 'Q',
        name: 'Edificio Q',
        type: 'building',
        coordinates: {
            latitude: -33.036620,
            longitude: -71.485320,
        },
        shown: true,
    },
    {
        id: 'R',
        name: 'Edificio R',
        type: 'building',
        coordinates: {
            latitude: -33.035981,
            longitude: -71.488080,
        },
        shown: true,
    },
    {
        id: 'S',
        name: 'Edificio S',
        type: 'building',
        coordinates: {
            latitude: -33.037823,
            longitude: -71.485569,
        },
        shown: true,
    },
    {
        id: 'U',
        name: 'Edificio U',
        type: 'building',
        coordinates: {
            latitude: -33.037735,
            longitude: -71.485277,
        },
        shown: true,
    },
    {
        id: 'W',
        name: 'Edificio W',
        type: 'building',
        coordinates: {
            latitude: -33.037281,
            longitude: -71.485985,
        },
        shown: true,
    },
    {
        id: 'X',
        name: 'Edificio X',
        type: 'building',
        coordinates: {
            latitude: -33.039547,
            longitude: -71.485245,
        },
        shown: true,
    },
]; 

export default JMCWayPoints;