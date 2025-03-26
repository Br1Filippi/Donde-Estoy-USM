import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.035857,
          longitude: -71.485567,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        minZoomLevel={15}
        showsUserLocation={true}
        mapType='hybrid'
      />
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
});

export default IndexPage;