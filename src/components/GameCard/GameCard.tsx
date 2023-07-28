import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid";
import StarRating from "react-native-star-rating";
import { storeColors } from "../../theme";

interface IProps {
  game: {
    id: number;
    title: string;
    image: any;
    downloads: string;
    stars: number;
  };
}

export default function GameCard({ game }: IProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  function onPress() {
    setIsFavorite((state) => !state);
  }

  return (
    <View className="mr-3">
      <Image source={game.image} className="w-80 h-60 rounded-3xl" />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={onPress}
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
          >
            <HeartIcon
              size="25"
              color={isFavorite ? storeColors.redHeart : "white"}
            />
          </TouchableOpacity>
        </View>
        <View className="space-y-1">
          <StarRating
            disabled
            starSize={15}
            containerStyle={{ width: 90 }}
            maxStars={5}
            rating={game.stars}
            emptyStar={require("../../../assets/emptyStar.png")}
            fullStar={require("../../../assets/fullStar.png")}
          />
          <Text className="text-xl font-bold text-gray-300">{game.title}</Text>
          <View className="flex-row gap-2 items-center">
            <ArrowDownTrayIcon size="18" color="lightgray" />
            <Text className="text-sm text-gray-300 font-semibold">
              {game.downloads} Downloads
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
