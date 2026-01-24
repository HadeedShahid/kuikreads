import { View, ViewProps } from "react-native";
import { cn } from "@/lib/cn";

interface CardProps extends ViewProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <View
      className={cn(
        "bg-white rounded-xl p-6",
        "border border-border/30",
        "shadow-sm",
        className
      )}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 20,
        elevation: 2,
      }}
      {...props}
    >
      {children}
    </View>
  );
}
