import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [encodedPolyline, setEncodedPolyline] = useState(null);

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

    // get data from redux
    const destinationLocation = useSelector(state => state.location.location);
    console.log('destination location ==>', destinationLocation);


    function decodePolyline(encoded) {
        let points = [];
        let index = 0, len = encoded.length;
        let lat = 0, lng = 0;

        while (index < len) {
            let b, shift = 0, result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;

            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;

            points.push({ latitude: (lat / 1E5), longitude: (lng / 1E5) });
        }

        return points;
    }





    // get direction
    const getDirection = async () => {
        console.log('get direction')
        const origin = `${location.coords.latitude},${location.coords.longitude}`;
        const destination = `${destinationLocation.lat},${destinationLocation.lng}`;
        const apiKey = 'AlzaSygG7UsMwA2DOhQ5P588iErobS8CHcarI0g';
        const url = `https://maps.gomaps.pro/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            
            // console.log('decode ==> ' , decodePolyline(json.routes[0].overview_polyline.points));
            

            if (json.routes.length) {
                setEncodedPolyline(json.routes[0].overview_polyline.points);
            }
        } catch (error) {
            console.error(error);
        }
    }

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
                {destinationLocation &&
                    <View>
                        <Marker
                            coordinate={
                                {
                                    latitude: destinationLocation.lat,
                                    longitude: destinationLocation.lng
                                }
                            }
                            title={'destination location'}
                            description={'hello world'}
                        />
                    </View>
                }
                {encodedPolyline &&
                    <View>

                        <Polyline
                            coordinates={decodePolyline(encodedPolyline)}
                            strokeColor="#764abc" // black color
                            strokeWidth={6}
                        />
                        {/* <Polyline
                            coordinates={[
                                { latitude: location.coords.latitude, longitude: location.coords.longitude },
                                { latitude: destinationLocation.lat, longitude: destinationLocation.lng }
                            ]}
                            strokeColor="#764abc" // black color
                            strokeWidth={6}
                        /> */}
                    </View>
                }
            </MapView>}
            <Button
                onPress={getDirection}
                title="Get Direction"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '90%',
    },
});


// redux