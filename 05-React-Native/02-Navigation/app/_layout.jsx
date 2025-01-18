import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="user"
          options={{
            drawerLabel: 'User',
            title: 'User',
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'profile',
            title: 'My profile',
          }}
        />
        <Drawer.Screen
          name="cart"
          options={{
            drawerLabel: 'Cart',
            title: 'My cart',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
