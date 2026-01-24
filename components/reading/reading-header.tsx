import { View } from "react-native";
import { Text } from "../ui/text";
import { IconButton } from "../ui/icon-button";

interface ReadingHeaderProps {
  /** Book title - required */
  bookTitle: string;
  /** Chapter label (e.g., "Chapter 12") - optional */
  chapterLabel?: string;
  /** Callback when menu button is pressed */
  onMenuPress?: () => void;
}

export function ReadingHeader({
  bookTitle,
  chapterLabel,
  onMenuPress,
}: ReadingHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-6 pt-4 pb-2">
      <View className="flex-1 mr-4">
        {chapterLabel && (
          <Text
            className="text-text-muted text-xs uppercase tracking-widest font-sans-bold"
            numberOfLines={1}
          >
            {chapterLabel}
          </Text>
        )}
        <Text
          className="text-text text-sm font-sans-medium"
          numberOfLines={1}
        >
          {bookTitle}
        </Text>
      </View>

      <IconButton
        icon="more-vert"
        accessibilityLabel="More options"
        variant="ghost"
        size="md"
        onPress={onMenuPress}
      />
    </View>
  );
}
