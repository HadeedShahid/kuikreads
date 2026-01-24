import { Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface ToolbarButtonProps extends Omit<PressableProps, "children"> {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  className?: string;
}

export function ToolbarButton({
  icon,
  label,
  className,
  disabled,
  ...props
}: ToolbarButtonProps) {
  return (
    <Pressable
      className={cn(
        "flex-row items-center gap-2 py-2 px-3",
        className
      )}
      style={{ opacity: disabled ? 0.4 : 1 }}
      disabled={disabled}
      accessibilityLabel={label}
      accessibilityRole="button"
      {...props}
    >
      <MaterialIcons name={icon} size={20} color="#897961" />
      <Text className="text-text-muted text-sm font-sans-medium">
        {label}
      </Text>
    </Pressable>
  );
}
