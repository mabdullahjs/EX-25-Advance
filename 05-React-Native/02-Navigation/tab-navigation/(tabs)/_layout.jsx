import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => {
                        return <View style={focused ? {
                            width: 50,
                            height: 50,
                            backgroundColor: 'red',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: 10
                        } : null}>
                            <FontAwesome name="home" size={28} color={focused ? 'white' : color} />
                        </View>
                    },
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Setting',
                    tabBarIcon: ({ color, focused }) => {
                        return <View style={focused ? {
                            width: 50,
                            height: 50,
                            backgroundColor: 'red',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: 10
                        } : null}>
                            <FontAwesome name="cog" size={28} color={focused ? 'white' : color} />
                        </View>
                    },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => {
                        return <View style={focused ? {
                            width: 50,
                            height: 50,
                            backgroundColor: 'red',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: 10
                        } : null}>
                            <FontAwesome name="user" size={28} color={focused ? 'white' : color} />
                        </View>
                    },
                }}
            />
        </Tabs>
    );
}
