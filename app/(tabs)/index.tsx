import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import InteractiveMap from '@/components/InteractiveMap';

const IndexPage = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg("Permission to access location was denied");
        Alert.alert('Permission Denied', 'Location permission is required to show your position on the map.');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  return <InteractiveMap userLocation={location} />;
};

export default IndexPage;

export default IndexPage;