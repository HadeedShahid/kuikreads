import { View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface TabBarItem {
  key: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  /** Filled icon variant when active (optional) */
  activeIcon?: keyof typeof MaterialIcons.glyphMap;
  label: string;
}

interface TabBarProps {
  items: TabBarItem[];
  activeKey: string;
  onTabPress: (key: string) => void;
  className?: string;
}

export function TabBar({
  items,
  activeKey,
  onTabPress,
  className,
}: TabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={cn(
        "flex-row justify-around items-center bg-background border-t border-border/50 pt-3",
        className
      )}
      style={{ paddingBottom: Math.max(insets.bottom, 12) }}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        const iconName = isActive && item.activeIcon ? item.activeIcon : item.icon;

        return (
          <Pressable
            key={item.key}
            onPress={() => onTabPress(item.key)}
            accessibilityLabel={item.label}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            className="items-center gap-1 px-4 py-1"
          >
            <MaterialIcons
              name={iconName}
              size={24}
              color={isActive ? "#ec9213" : "#897961"}
            />
            <Text
              className={cn(
                "text-[10px] font-sans-bold uppercase tracking-wider",
                isActive ? "text-primary" : "text-text-muted"
              )}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
