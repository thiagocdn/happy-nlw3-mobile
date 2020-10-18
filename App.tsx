import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map_marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.9722666,
          longitude: -46.9902287,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
          }}
        >
          <Marker 
            icon={mapMarker}
            coordinate={{
              latitude: -22.9722666,
              longitude: -46.9902287
            }}
          >
            <Callout>
              <Text>Lar das Meninas</Text>
            </Callout>
          </Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
