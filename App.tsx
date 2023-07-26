import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
