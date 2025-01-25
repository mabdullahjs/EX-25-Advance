// import { CameraView, useCameraPermissions } from 'expo-camera';
// import { useRef, useState } from 'react';
// import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as MediaLibrary from 'expo-media-library';
// import * as ImagePicker from 'expo-image-picker';

// export default function Camera() {
//     const cameraRef = useRef(null);
//     const [facing, setFacing] = useState('back');
//     const [showCamera, setShowCamera] = useState(true);
//     const [image, setImage] = useState(null);
//     const [permission, requestPermission] = useCameraPermissions();

//     if (!permission) {
//         // Camera permissions are still loading.
//         return <View />;
//     }


//     if (!permission.granted) {
//         // Camera permissions are not granted yet.
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.message}>We need your permission to show the camera</Text>
//                 <Button onPress={requestPermission} title="grant permission" />
//             </View>
//         );
//     }

//     function toggleCameraFacing() {
//         setFacing(current => (current === 'back' ? 'front' : 'back'));
//     }

//     function toggleCameraActive() {
//         setShowCamera(!showCamera);
//     }


//     async function takePicture() {
//         if (cameraRef.current) {
//             const options = { quality: 0.5, base64: true, skipProcessing: true };
//             let photo = await cameraRef.current.takePictureAsync(options);
//             console.log(photo.uri);
//             const asset = await MediaLibrary.createAssetAsync(photo.uri);
//             console.log(asset);
//             setImage(photo.uri);
//             toggleCameraActive()
//         }
//     }

//     async function pickImage() {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ['images'],
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result)

//         if (!result.cancelled) {
//             setImage(result.assets[0].uri);
//         }
//     }

//     return (
//         <View style={styles.container}>
//             {showCamera ? <CameraView style={styles.camera} facing={facing} ref={cameraRef} enableTorch={false} flash='off'>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//                         <Text style={styles.text}>Flip Camera</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={toggleCameraActive}>
//                         <Text style={styles.text}>Stop camera</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={takePicture}>
//                         <Text style={styles.text}>Take Photo</Text>
//                     </TouchableOpacity>
//                 </View>
//             </CameraView> : <View>
//                 <TouchableOpacity style={styles.secondbutton} onPress={toggleCameraActive}>
//                     <Text style={{ color: 'white' }}>Open Camera</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.secondbutton} onPress={() => setImage(null)}>
//                     <Text style={{ color: 'white' }}>remove Image</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.secondbutton} onPress={pickImage}>
//                     <Text style={{ color: 'white' }}>Pick Image</Text>
//                 </TouchableOpacity>
//                 {image && <Image source={{ uri: image }} style={styles.image} />}
//             </View>}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     message: {
//         textAlign: 'center',
//         paddingBottom: 10,
//     },
//     camera: {
//         flex: 1,
//     },
//     buttonContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'transparent',
//         margin: 64,
//     },
//     button: {
//         flex: 1,
//         alignSelf: 'flex-end',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'grey',
//     },
//     secondbutton: {
//         alignItems: 'center',
//         backgroundColor: 'red',
//         padding: 10,
//         margin: 20,
//     },
//     image: {
//         width: 300,
//         height: 300,
//     },
// });






import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export default function Camera() {
    const cameraRef = useRef(null);
    const [facing, setFacing] = useState('back');
    const [showCamera, setShowCamera] = useState(true);
    const [image, setImage] = useState(null);
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.permissionMessage}>We need your permission to access the camera.</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    function toggleCameraActive() {
        setShowCamera(!showCamera);
    }

    async function takePicture() {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            let photo = await cameraRef.current.takePictureAsync(options);
            console.log(photo.uri);
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
            console.log(asset);
            setImage(photo.uri);
            toggleCameraActive();
        }
    }

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.container}>
            {showCamera ? (
                <CameraView style={styles.camera} facing={facing} ref={cameraRef} enableTorch={false} flash="off">
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
                            <Text style={styles.buttonText}>Flip Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraActive}>
                            <Text style={styles.buttonText}>Stop Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                            <Text style={styles.buttonText}>Take Photo</Text>
                        </TouchableOpacity>
                    </View>
                </CameraView>
            ) : (
                <View style={styles.imagePickerContainer}>
                    <TouchableOpacity style={styles.actionButton} onPress={toggleCameraActive}>
                        <Text style={styles.actionButtonText}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={() => setImage(null)}>
                        <Text style={styles.actionButtonText}>Remove Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={pickImage}>
                        <Text style={styles.actionButtonText}>Pick Image</Text>
                    </TouchableOpacity>

                    {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingTop: 40,
    },
    permissionMessage: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    camera: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 10,
        margin: 10
    },
    cameraButton: {
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        elevation: 5
    },
    buttonText: {
        fontSize: 13 ,
        fontWeight: 'bold',
        color: '#fff',
    },
    imagePickerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginBottom: 15,
        width: '80%',
        alignItems: 'center',
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedImage: {
        width: 300,
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ccc',
    },
});
