import { View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "../ui/icon-button";

interface PlaybackControlsProps {
  /** Whether content is currently playing */
  isPlaying: boolean;
  /** Whether at the beginning (disables rewind/previous) */
  isAtStart?: boolean;
  /** Whether at the end (disables forward/next) */
  isAtEnd?: boolean;
  /** Callback when play/pause is pressed */
  onPlayPause: () => void;
  /** Callback when rewind is pressed (e.g., go back 10 words) */
  onRewind?: () => void;
  /** Callback when skip previous is pressed (e.g., previous sentence) */
  onSkipPrevious?: () => void;
  /** Callback when skip next is pressed (e.g., next sentence) */
  onSkipNext?: () => void;
  /** Callback when forward is pressed (e.g., skip 10 words) */
  onForward?: () => void;
}

export function PlaybackControls({
  isPlaying,
  isAtStart = false,
  isAtEnd = false,
  onPlayPause,
  onRewind,
  onSkipPrevious,
  onSkipNext,
  onForward,
}: PlaybackControlsProps) {
  return (
    <View className="flex-row items-center justify-evenly">
      <IconButton
        icon="replay-10"
        accessibilityLabel="Rewind 10 words"
        size="lg"
        variant="ghost"
        disabled={isAtStart}
        onPress={onRewind}
      />

      <IconButton
        icon="skip-previous"
        accessibilityLabel="Previous sentence"
        size="lg"
        variant="ghost"
        disabled={isAtStart}
        onPress={onSkipPrevious}
      />

      {/* Center play/pause button */}
      <Pressable
        onPress={onPlayPause}
        accessibilityLabel={isPlaying ? "Pause" : "Play"}
        accessibilityRole="button"
        className="w-20 h-20 bg-primary rounded-full items-center justify-center"
        style={({ pressed }) => ({
          transform: [{ scale: pressed ? 0.95 : 1 }],
          shadowColor: "#ec9213",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        })}
      >
        <MaterialIcons
          name={isPlaying ? "pause" : "play-arrow"}
          size={48}
          color="white"
        />
      </Pressable>

      <IconButton
        icon="skip-next"
        accessibilityLabel="Next sentence"
        size="lg"
        variant="ghost"
        disabled={isAtEnd}
        onPress={onSkipNext}
      />

      <IconButton
        icon="forward-10"
        accessibilityLabel="Forward 10 words"
        size="lg"
        variant="ghost"
        disabled={isAtEnd}
        onPress={onForward}
      />
    </View>
  );
}
