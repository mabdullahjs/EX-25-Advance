import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { router } from "expo-router";
import {auth} from "@/config/firebase/firebaseconfig"

export default function Index() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
       router.push('/login')
      }
    });

  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
      <View style={styles.children}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  children: {
    flex: 1
  }
})