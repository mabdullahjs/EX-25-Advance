import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from '@/config/redux/store/store'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </Provider>
  )
}
