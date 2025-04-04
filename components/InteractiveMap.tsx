import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polygon, UrlTile } from 'react-native-maps';
import * as Location from 'expo-location';
import SearchBar from './SearchBar';
import JMCBuildings from './JMC/Buildings';
import JMCWayPoints from './JMC/WayPoints';

interface InteractiveMapProps {
  userLocation: {
    latitude: number;
    longitude: number;
  } | null;
}

const InteractiveMap = ({ userLocation }: InteractiveMapProps) => {
  const [heading, setHeading] = useState(0);
  const [locationSubscription, setLocationSubscription] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
      const headingSub = await Location.watchHeadingAsync((heading) => {
        setHeading(heading.magHeading);
      });
      setLocationSubscription(headingSub);
    })();

    return () => {
      locationSubscription?.remove();
    };
  }, []);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.035857,
          longitude: -71.485567,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        minZoomLevel={16.5}
        showsUserLocation={true} 
        mapType='satellite'
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={mapStyle}
        >
        {JMCBuildings.map((building) => (
                <Polygon
                    key={building.id}
                    coordinates={building.coordinates}
                    fillColor={building.color}
                    strokeColor={building.color}
                    strokeWidth={2}
                    tappable={true}
                />
            ))},
        {JMCWayPoints.map((waypoint) => (
          waypoint.shown && (
            <Marker
              key={waypoint.id}
              coordinate={waypoint.coordinates}
              title={waypoint.name}
              description={waypoint.type}
            />
          )
        ))}
      </MapView>
      <SearchBar  />
      {/* Uncomment this for debuggin the heading and user position :) */}
      {/* <View style={styles.debugContainer}>
        <Text style={styles.debugText}>Heading: {heading.toFixed(2)}°</Text>
        <Text style={styles.debugText}>
          User Location: {userLocation ? `${userLocation.latitude}, ${userLocation.longitude}` : 'Loading...'}
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  debugContainer: {
    position: 'absolute',
    bottom: 70,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 5,
  },
  debugText: {
    color: 'white',
    fontSize: 12,
  }
});
const mapStyle = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

export default InteractiveMap;