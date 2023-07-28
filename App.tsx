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
import GameCard from "./src/components/GameCard/GameCard";
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

const featuredGames = [
  {
    id: 1,
    title: "Zooba",
    image: require("./assets/images/zooba.png"),
    downloads: "200k",
    stars: 4,
  },
  {
    id: 2,
    title: "Subway Surfer",
    image: require("./assets/images/subway.png"),
    downloads: "5M",
    stars: 4,
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("./assets/images/freeFire.png"),
    downloads: "100M",
    stars: 3,
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require("./assets/images/altosAdventure.png"),
    downloads: "20k",
    stars: 4,
  },
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
          <View className="mt-3 space-y-4">
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

          {/* featured row */}
          <View className="mt-3 space-x-4">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 font-bold"
            >
              Featured Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {featuredGames.map((game, index) => (
                  <GameCard key={index} game={game} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
