import { View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";
import { Text } from "./ui/text";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  className?: string;
}

export function Header({
  title,
  onBackPress,
  showBackButton = true,
  className,
}: HeaderProps) {
  return (
    <View
      className={cn(
        "w-full flex-row items-center px-4 py-4 pb-2",
        className
      )}
    >
      {showBackButton ? (
        <Pressable
          onPress={onBackPress}
          className="w-12 h-12 items-center justify-center"
        >
          <MaterialIcons name="chevron-left" size={28} color="#181511" />
        </Pressable>
      ) : (
        <View className="w-12" />
      )}
      <Text variant="title" className="flex-1 text-center pr-12">
        {title}
      </Text>
    </View>
  );
}
