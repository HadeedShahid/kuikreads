import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";
import { Text } from "./ui/text";

interface AppLogoProps {
  size?: "small" | "large";
  showTagline?: boolean;
  className?: string;
}

export function AppLogo({
  size = "large",
  showTagline = true,
  className,
}: AppLogoProps) {
  const isLarge = size === "large";
  const iconBoxSize = isLarge ? "w-20 h-20" : "w-12 h-12";
  const iconSize = isLarge ? 48 : 28;
  const badgeSize = isLarge ? "p-1" : "p-0.5";
  const badgeIconSize = isLarge ? 20 : 14;
  const badgePosition = isLarge ? "translate-x-4 translate-y-4" : "translate-x-2 translate-y-2";

  return (
    <View className={cn("items-center", className)}>
      {/* Logo Icon */}
      <View className="relative mb-4">
        <LinearGradient
          colors={["#ec9213", "#bf5b30"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className={cn(
            "rounded-xl items-center justify-center shadow-lg",
            iconBoxSize
          )}
        >
          <MaterialIcons name="auto-stories" size={iconSize} color="white" />
        </LinearGradient>
        {/* Arrow Badge */}
        <View
          className={cn(
            "absolute bg-white rounded-full shadow-sm",
            badgeSize,
            badgePosition
          )}
        >
          <MaterialIcons name="arrow-forward" size={badgeIconSize} color="#ec9213" />
        </View>
      </View>

      {/* App Name */}
      <Text className={cn(
        "font-sans-bold tracking-tight text-center",
        isLarge ? "text-3xl" : "text-xl"
      )}>
        KuikReads
      </Text>

      {/* Tagline */}
      {showTagline && (
        <Text className="text-text-muted text-base font-sans-medium mt-1">
          Read Faster. Finish More.
        </Text>
      )}
    </View>
  );
}
