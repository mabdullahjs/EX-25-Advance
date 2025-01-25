// import { Text, View } from "react-native";
// import Camera from "./src/components/Camera";
// import { useEffect, useState } from "react";

// export default function Index() {
//   const [user , setUser] = useState(null)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         setUser(json)
//       })
//   }, [])

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: 'center'
//       }}
//     >
//       <Text>Hello world.</Text>
//       {user && user.map(item =>{
//         return <Text key={item.id}>{item.name}</Text>
//       })}
//       {/* <Camera/> */}
//     </View>
//   );
// }


import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router } from 'expo-router'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/config/firebaseConfig"

const Home = () => {
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
    <View>
      <Text>Home</Text>
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Register</Link>
    </View>
  )
}

export default Home