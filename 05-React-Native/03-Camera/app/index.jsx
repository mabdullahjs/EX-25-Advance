import { Text, View } from "react-native";
import Camera from "./src/components/Camera";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Camera/>
    </View>
  );
}
