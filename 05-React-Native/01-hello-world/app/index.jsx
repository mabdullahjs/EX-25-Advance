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







import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const screenDimensions = Dimensions.get('screen').height;

const Index = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {/* header */}
      <View style={styles.header}>
        <MaterialIcons style={styles.menuIcon} name="menu" size={34} color="black" />
        <Text style={styles.logo}>BYKEA</Text>
        <MaterialIcons style={styles.menuIcon} name="add-call" size={34} color="black" />
      </View>

      {/* hero section */}
      <View style={styles.heroSection}>
        <Image
          style={styles.bannerImg}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s",
          }}
        />
      </View>

      {/* container */}
      <View style={styles.chatContainer}>
        <View style={{ ...styles.children, borderRightWidth: 1 }}>
          <MaterialIcons name="message" size={25} color="#989898" />
        </View>
        <View style={styles.children}>
          <MaterialIcons name="receipt-long" size={25} color="#989898" />
          <Text style={{
            fontSize: 20,
            color: '#989898'
          }}>Rs. 0</Text>
        </View>
      </View>

      {/* orders menu */}
      <View style={styles.containerParent}>
        <View style={styles.containerChildren}>
          <Card title="hello" />
          <Text style={styles.nestedChildren}>Hello</Text>
        </View>
        <View style={styles.containerChildren}>
          <Text style={styles.nestedChildren}>Hello</Text>
          <Text style={styles.nestedChildren}>Hello</Text>
        </View>
        <View style={styles.containerChildren}>
          <Text style={styles.nestedChildren}>Hello</Text>
          <Text style={styles.nestedChildren}>Hello</Text>
        </View>
      </View>


    </SafeAreaView>
  )
}

export default Index


const Card = ({ title, image, color }) => {
  return <View style={{ ...styles.nestedChildren, backgroundColor: color }}>
    <FontAwesome6 style={{ alignItems: "start" }} name="message" size={40} color="black" />
    <Text>{title}</Text>
  </View>
}


const styles = StyleSheet.create({
  header: {
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
  menuIcon: {
    marginHorizontal: 10,
    color: '#1a994e'
  },
  heroSection: {
    height: screenDimensions / 3.5,
    backgroundColor: '#ededed',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  bannerImg: {
    height: '80%',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 20
  },
  chatContainer: {

    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 20,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  containerParent: {
    flex: 1,
    backgroundColor: 'grey',
    gap: 10,
    padding: 20
  },
  containerChildren: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10


  },
  nestedChildren: {
    borderWidth: 1,
    flex: 1
  }
})

