// import { StyleSheet, Text, View } from "react-native";

// export default function Index() {
//   // h1 , h2 , p ===> <Text>
//   // div, span ===> <View>
//   // img ===> <Image>
//   // button ===> <Touchableopacity> <Pressable>
//   return (
//     <View style={{
//       flex: 1
//     }}>
//       <View style={{
//         flex: 1,
//         backgroundColor: 'red'
//       }}>
//         <Text style={styles.text}>Hello world 2</Text>
//       </View>
//       <View style={{
//         flex: 2,
//         backgroundColor: 'green'
//       }}>
//         <Text>Hello world 2</Text>
//       </View>
//       <View style={{
//         flex: 1,
//         backgroundColor: 'blue'
//       }}>
//         <Text>Hello world 2</Text>
//       </View>
//       <View style={{
//         flex: 3,
//         backgroundColor: 'purple'
//       }}>
//         <Text>Hello world 2</Text>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   text: {
//     color: 'white',
//   }
// })







import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Index = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <View style={styles.header}>
      <MaterialIcons style={styles.menuIcon} name="menu" size={34} color="black" />
      <Text style={styles.logo}>BYKEA</Text>
      <MaterialIcons style={styles.menuIcon} name="add-call" size={34} color="black" />
      </View>
    </SafeAreaView>
  )
}

export default Index


const styles = StyleSheet.create({
  header:{
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: '#1a994e',
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 700
  },
  menuIcon:{
    marginHorizontal: 10,
    color: '#1a994e'
  }
})

