import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading , setLoading]  = useState(true)

    useEffect(() => {
        async function getCurrentLocation() {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            console.log(currentLocation);
            setLocation(currentLocation);
            setLoading(false)

        }

        getCurrentLocation();
    }, []);
    return (
        <View style={styles.container}>
            {errorMsg && <Text>{errorMsg}</Text>}
            {loading && <ActivityIndicator size="large" color="#00ff00" />}
            {location && <MapView style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={
                        {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }
                    }
                    title={'my current location'}
                    description={'expertizo university'}
                />
            </MapView>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
