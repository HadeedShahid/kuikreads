import { Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";

type IconButtonSize = "sm" | "md" | "lg" | "xl";
type IconButtonVariant = "ghost" | "filled" | "primary";

interface IconButtonProps extends Omit<PressableProps, "children"> {
  icon: keyof typeof MaterialIcons.glyphMap;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  /** Required for accessibility */
  accessibilityLabel: string;
  className?: string;
}

const sizeConfig: Record<IconButtonSize, { button: number; icon: number }> = {
  sm: { button: 36, icon: 20 },
  md: { button: 44, icon: 24 }, // Minimum touch target
  lg: { button: 48, icon: 28 },
  xl: { button: 80, icon: 48 },
};

const variantStyles: Record<IconButtonVariant, { bg: string; color: string; activeBg: string }> = {
  ghost: {
    bg: "transparent",
    color: "#181511",
    activeBg: "rgba(0,0,0,0.05)",
  },
  filled: {
    bg: "#f4f3f0",
    color: "#181511",
    activeBg: "#e6e5e2",
  },
  primary: {
    bg: "#ec9213",
    color: "#ffffff",
    activeBg: "#d98510",
  },
};

export function IconButton({
  icon,
  size = "md",
  variant = "ghost",
  accessibilityLabel,
  className,
  disabled,
  ...props
}: IconButtonProps) {
  const { button: buttonSize, icon: iconSize } = sizeConfig[size];
  const styles = variantStyles[variant];

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      disabled={disabled}
      className={cn("items-center justify-center rounded-full", className)}
      style={({ pressed }) => ({
        width: buttonSize,
        height: buttonSize,
        backgroundColor: pressed ? styles.activeBg : styles.bg,
        opacity: disabled ? 0.4 : 1,
      })}
      {...props}
    >
      <MaterialIcons
        name={icon}
        size={iconSize}
        color={styles.color}
      />
    </Pressable>
  );
}
