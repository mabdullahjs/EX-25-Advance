import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const Settings = () => {
    const [input, onChangeInput] = useState('');
    const [todo, setTodo] = useState([]);


    // add todo
    function addTodo() {
        console.log(input);
        todo.unshift({
            title: input,
            id: Date.now()
        })
        setTodo([...todo]);
        console.log(todo);


    }
    function deleteTodo(id) {
        console.log(id)
        const index = todo.findIndex(item => item.id === id)
        console.log(index);
        todo.splice(index , 1)
        setTodo([...todo]);

    }
    function editTodo(id) {
        console.log(id)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeInput}
                value={input}
                placeholder='enter todo'
            />
            <TouchableOpacity style={styles.button} onPress={addTodo}>
                <Text>Press Here</Text>
            </TouchableOpacity>

            <FlatList
                data={todo}
                renderItem={({ item }) => <View style={styles.item}>
                    <Text style={styles.title}>{item.title}
                        <Button
                            title="Delete"
                            onPress={() => deleteTodo(item.id)}
                        />
                        <Button
                            title="Edit"
                            onPress={() => editTodo(item.id)}
                        />
                    </Text>
                </View>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginHorizontal: 50
    },
    item: {
        backgroundColor: '#f9c2ff',
        // padding: 20,
        marginVertical: 20,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 32,
    },
})