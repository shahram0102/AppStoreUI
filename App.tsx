import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, Text, View } from "react-native";
import {Bars3CenterLeftIcon, BellIcon} from "react-native-heroicons/solid"
import { storeColors } from "./src/theme";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView className="py-8" >
        <View className="container">
          <View className="flex-row justify-between items-center px-4" >
          <Bars3CenterLeftIcon color={storeColors.text} size="30" />
          <BellIcon color={storeColors.text} size="30" />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
