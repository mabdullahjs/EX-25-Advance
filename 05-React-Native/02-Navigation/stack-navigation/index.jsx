import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d901',
    title: 'f Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d902',
    title: 's Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d903',
    title: 'seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d904',
    title: 'eight Item',
  },
];

const Home = () => {

  function myfunc() {
    alert("hello world")
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor='black' />
      {/* <ScrollView>
        <Text>lorem1000</Text>
      </ScrollView> */}
      <Text>Hello world</Text>
      <TouchableOpacity onPress={myfunc} style={styles.button}>
        <Text>Hello world</Text>
      </TouchableOpacity>
      <Link href={'/settings'}>Setting</Link>
      {/* <Link href={'/profile'}>Profile</Link> */}

      <Link href={{
        pathname: '/profile/[id]',
        params: { id: 'fsdlfsdklfj9wwpeorew324234' },
      }}>Dynamic Profile</Link>
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>}
        keyExtractor={item => item.id}
      /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 20
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

})