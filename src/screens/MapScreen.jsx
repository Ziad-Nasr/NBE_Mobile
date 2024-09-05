import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {TopBar} from '../components/TopBar';

const MapScreen = () => {
  const markers = [
    {
      title: 'Gate 1 Rehab Branch',
      coordinates: {
        latitude: 30.0535448,
        longitude: 31.4977495,
      },
    },
    {
      title: 'Branch 2',
      coordinates: {
        latitude: 30.0391081,
        longitude: 31.4837261,
      },
    },
    {
      title: 'Branch 3',
      coordinates: {
        latitude: 30.0437544,
        longitude: 31.4888679,
      },
    },
    {
      title: 'Branch 4',
      coordinates: {
        latitude: 30.0484191,
        longitude: 31.4886475,
      },
    },
  ];
  return (
    <View>
      <TopBar />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 30.0437544, // Example coordinates
            longitude: 31.4888679,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '95%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
