import { View, Pressable } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface SegmentedControlProps {
  options: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

export function SegmentedControl({
  options,
  selectedIndex,
  onSelect,
  className,
}: SegmentedControlProps) {
  return (
    <View
      className={cn(
        "flex-row h-12 rounded-xl bg-[#edece9] p-1",
        className
      )}
    >
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;
        return (
          <Pressable
            key={option}
            onPress={() => onSelect(index)}
            className={cn(
              "flex-1 items-center justify-center rounded-lg",
              isSelected && "bg-white"
            )}
            style={
              isSelected
                ? {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 1,
                  }
                : undefined
            }
          >
            <Text
              className={cn(
                "font-sans-medium",
                isSelected ? "text-text" : "text-text-muted"
              )}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
