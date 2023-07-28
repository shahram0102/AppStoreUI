import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/solid";
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
    image: require("./assets/zooba.png"),
    downloads: "200k",
    stars: 4,
  },
  {
    id: 2,
    title: "Subway Surfer",
    image: require("./assets/subway.png"),
    downloads: "5M",
    stars: 4,
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("./assets/freeFire.png"),
    downloads: "100M",
    stars: 3,
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require("./assets/altosAdventure.png"),
    downloads: "20k",
    stars: 4,
  },
];

const actionGames = [
  {
    id: 1,
    title: "Shadow Fight",
    image: require("./assets/shadowFight.png"),
    downloads: "20M",
    stars: 4.5,
  },
  {
    id: 2,
    title: "Valor Arena",
    image: require("./assets/valorArena.png"),
    downloads: "10k",
    stars: 3.4,
  },
  {
    id: 3,
    title: "Frag",
    image: require("./assets/frag.png"),
    downloads: "80k",
    stars: 4.6,
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require("./assets/zoobaGame.png"),
    downloads: "40k",
    stars: 3.5,
  },
  {
    id: 4,
    title: "Clash of Clans",
    image: require("./assets/clashofclans.png"),
    downloads: "20k",
    stars: 4.2,
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  function onPress(category: string) {
    setActiveCategory(category);
  }
  function onPressGame(id: number) {
    setSelectedGame(id);
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
                    return <GradientCategory text={category} />;
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
              className="ml-4 mb-3 font-bold"
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

          {/* top action games */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center pr-4 mb-2">
              <Text
                style={{ color: storeColors.text }}
                className="ml-4 font-bold"
              >
                Top Action Games
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-600 font-bold">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ height: 360 }}
              showsVerticalScrollIndicator={false}
            >
              {actionGames.map((game, index) => {
                const bg =
                  game.id === selectedGame
                    ? "rgba(255,255,255,0.4)"
                    : "transparent";
                return (
                  <TouchableOpacity
                    className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                    key={index}
                    style={{ backgroundColor: bg }}
                    onPress={() => void onPressGame(game.id)}
                  >
                    <Image
                      source={game.image}
                      alt={game.title}
                      style={{ width: 80, height: 80 }}
                      className="rounded-2xl"
                    />
                    <View className="flex-1 flex justify-center pl-3 gap-y-3">
                      <Text
                        style={{ color: storeColors.text }}
                        className="font-semibold"
                      >
                        {game.title}
                      </Text>
                      <View className="flex-row space-x-3">
                        <View className="flex-row gap-1">
                          <Image
                            className="w-4 h-4 opacity-80"
                            source={require("./assets/fullStar.png")}
                          />
                          <Text className="text-xs text-gray-700">
                            {game.stars} stars
                          </Text>
                        </View>
                        <View className="flex-row gap-1">
                          <ArrowDownTrayIcon
                            className="text-blue-500"
                            size="15"
                          />
                          <Text className="text-xs text-gray-700">
                            {game.downloads}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex justify-center items-center">
                      <GradientCategory text="play" buttonClass="py-2 px-5" />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
