import { Pressable, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface RadioCardProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
  className?: string;
}

export function RadioCard({
  icon,
  title,
  description,
  selected,
  onPress,
  className,
}: RadioCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "flex-row items-center gap-4 bg-white px-4 min-h-[88px] py-3 rounded-xl border-2",
        selected ? "border-primary" : "border-transparent",
        className
      )}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      {/* Icon */}
      <View className="w-12 h-12 rounded-lg bg-[#f4f3f0] items-center justify-center">
        <MaterialIcons name={icon} size={24} color="#181511" />
      </View>

      {/* Text Content */}
      <View className="flex-1">
        <Text className="text-base font-sans-semibold leading-tight">
          {title}
        </Text>
        <Text className="text-sm text-text-muted leading-normal">
          {description}
        </Text>
      </View>

      {/* Radio Indicator */}
      <View
        className={cn(
          "w-6 h-6 rounded-full border-2 items-center justify-center",
          selected ? "border-primary bg-primary" : "border-[#e6e1db]"
        )}
      >
        {selected && (
          <View className="w-2 h-2 rounded-full bg-white" />
        )}
      </View>
    </Pressable>
  );
}
