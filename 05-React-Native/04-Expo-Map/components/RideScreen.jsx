import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, Image, KeyboardAvoidingView } from 'react-native';
import carIcon from '../assets/icons/car.png'
import motorbikeIcon from '../assets/icons/motorbike.png'
import rickshawIcon from '../assets/icons/rickshaw.png'


export default function RideBookingScreen() {
    
    const [destination, setDestination] = useState('');
    const icons = [
        { id: '1', name: 'Car', icon: carIcon },
        { id: '2', name: 'Bike', icon: motorbikeIcon },
        { id: '3', name: 'Rickshaw', icon: rickshawIcon },
    ];


    // ride booked
    const rideBooked = async ()=>{
      
        console.log(destination);
        
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Destination"
                value={destination}
                onChangeText={setDestination}
            />
            <View style={styles.iconSliderContainer}>
                <FlatList
                    data={icons}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.iconContainer}>
                            <Image source={item.icon} style={styles.iconImage} />
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    style={styles.slider}
                />
            </View>
            <Button
                title="Book Ride"
                onPress={rideBooked}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    predictionList: {
        maxHeight: 200,
    },
    predictionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    predictionDetails: {
        fontSize: 14,
        color: 'gray',
    },
    iconSliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        flexGrow: 0,
    },
    iconContainer: {
        alignItems: 'center',
        marginRight: 10,
        width: 80
    },
    iconImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 10
    },
});

//AlzaSygG7UsMwA2DOhQ5P588iErobS8CHcarI0g