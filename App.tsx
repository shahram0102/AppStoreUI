import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/solid";
import GradientCategory from "./src/components/GradientCategory/GradientCategory";
import { storeColors } from "./src/theme";

const categories = [
  "Action",
  "Family",
  "Puzzle",
  "Adventure",
  "Racing",
  "Education",
  "Others",
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Action");

  function onPress(category: (typeof categories)[number]) {
    setActiveCategory(category);
  }

  return (
    <LinearGradient
      colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView className="py-8">
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
          </View>

          {/* categories */}
          <View className="mt-3 space-y-3">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-3xl font-bold"
            >
              Browse game
            </Text>
            <View className="px-4">
              <ScrollView
                horizontal
                className="space-x-2"
                showsHorizontalScrollIndicator={false}
              >
                {categories.map((category) => {
                  if (category === activeCategory) {
                    <GradientCategory text={category} />;
                  } else {
                    return (
                      <TouchableOpacity
                        key={category}
                        className="bg-blue-200 p-3 px-4 rounded-full"
                        onPress={() => void onPress(category)}
                      >
                        <Text>{category}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
