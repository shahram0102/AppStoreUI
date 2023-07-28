import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";

interface IProps {
  text: string;
  buttonClass?: string;
}
export default function GradientCategory({ buttonClass, text }: IProps) {
  return (
    <LinearGradient
      colors={["rgba(9,181,211,0.4)", "rgba(58,131,244,0.4)"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.1, y: 0.2 }}
      className={`rounded-full ml-2`}
    >
      <TouchableOpacity className={`p-3 px-4 ${buttonClass}`}>
        <Text className="text-white font-bold">{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
