import { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

interface ReadingProgressBarProps {
  /** Progress value between 0 and 100 */
  progress: number;
  /** Whether to animate progress changes */
  animated?: boolean;
}

export function ReadingProgressBar({
  progress,
  animated = true,
}: ReadingProgressBarProps) {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  const animatedWidth = useRef(new Animated.Value(clampedProgress)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(animatedWidth, {
        toValue: clampedProgress,
        duration: 300,
        useNativeDriver: false, // width animation can't use native driver
      }).start();
    } else {
      animatedWidth.setValue(clampedProgress);
    }
  }, [clampedProgress, animated, animatedWidth]);

  return (
    <View className="h-1 bg-[#e6dfdb]">
      <Animated.View
        className="h-full bg-primary"
        style={{
          width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
        }}
      />
    </View>
  );
}
