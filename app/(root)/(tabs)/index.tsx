import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text className='font-rubik-bold text-lg my-10'>Welocome to Restate</Text>
    </View>
  );
}
