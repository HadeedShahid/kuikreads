import { useState, useEffect, useRef, useCallback } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ReadingProgressBar,
  ReadingHeader,
  RSVPWordDisplay,
  PlaybackControls,
  SpeedSettingsModal,
  AppearanceSettingsModal,
  Badge,
  ToolbarButton,
} from "@/components";
import type { ReadingTheme } from "@/components";

// Sample text for testing
const SAMPLE_TEXT = `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`;

// Parse text into words
function parseTextToWords(text: string): string[] {
  return text.split(/\s+/).filter((word) => word.length > 0);
}

export default function ReadScreen() {
  const words = useRef(parseTextToWords(SAMPLE_TEXT)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wpm, setWpm] = useState(250);
  const [showSpeedSettings, setShowSpeedSettings] = useState(false);
  const [showAppearanceSettings, setShowAppearanceSettings] = useState(false);

  // Appearance settings
  const [theme, setTheme] = useState<ReadingTheme>("light");
  const [fontSize, setFontSize] = useState(40);
  const [showORPHighlight, setShowORPHighlight] = useState(true);
  const [showFocusGuide, setShowFocusGuide] = useState(true);

  // Theme colors
  const themeColors = {
    light: { bg: "#FAF9F7", text: "#181511", muted: "#897961" },
    dark: { bg: "#1a1a1a", text: "#ffffff", muted: "#a0a0a0" },
    sepia: { bg: "#f4ecd8", text: "#5c4b37", muted: "#8b7355" },
  };
  const currentThemeColors = themeColors[theme];

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Calculate interval based on WPM
  const intervalMs = Math.round(60000 / wpm);

  // Progress as percentage
  const progress = words.length > 0 ? (currentIndex / (words.length - 1)) * 100 : 0;

  // Current word
  const currentWord = words[currentIndex] || "";

  // Boundary checks
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= words.length - 1;

  // Playback control
  const startPlayback = useCallback(() => {
    if (isAtEnd) {
      setCurrentIndex(0); // Restart if at end
    }
    setIsPlaying(true);
  }, [isAtEnd]);

  const pausePlayback = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  }, [isPlaying, pausePlayback, startPlayback]);

  // Navigation controls
  const handleRewind = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 10));
  }, []);

  const handleSkipPrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleSkipNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(words.length - 1, prev + 1));
  }, [words.length]);

  const handleForward = useCallback(() => {
    setCurrentIndex((prev) => Math.min(words.length - 1, prev + 10));
  }, [words.length]);

  // Auto-advance when playing
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, intervalMs, words.length]);

  // Stop playing when reaching end
  useEffect(() => {
    if (isAtEnd && isPlaying) {
      setIsPlaying(false);
    }
  }, [isAtEnd, isPlaying]);

  const handleMenuPress = () => {
    console.log("Menu pressed");
  };

  const handleAppearancePress = () => {
    setShowAppearanceSettings(true);
  };

  const handleSpeedPress = () => {
    setShowSpeedSettings(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      {/* Progress Bar */}
      <ReadingProgressBar progress={progress} />

      {/* Header */}
      <ReadingHeader
        bookTitle="The Great Gatsby"
        chapterLabel="Chapter 1"
        onMenuPress={handleMenuPress}
      />

      {/* Main Reading Area */}
      <View
        className="flex-1 items-center justify-center px-2"
        style={{ overflow: "visible", backgroundColor: currentThemeColors.bg }}
      >
        <RSVPWordDisplay
          word={currentWord}
          fontSize={fontSize}
          showORPHighlight={showORPHighlight}
          showFocusGuide={showFocusGuide}
          textColor={currentThemeColors.text}
          mutedColor={currentThemeColors.muted}
        />

        {/* WPM Badge */}
        <View className="mt-4">
          <Badge variant="primary">{wpm} WPM</Badge>
        </View>
      </View>

      {/* Bottom Controls */}
      <View className="pb-4 px-4">
        {/* Playback Controls */}
        <PlaybackControls
          isPlaying={isPlaying}
          isAtStart={isAtStart}
          isAtEnd={isAtEnd}
          onPlayPause={handlePlayPause}
          onRewind={handleRewind}
          onSkipPrevious={handleSkipPrevious}
          onSkipNext={handleSkipNext}
          onForward={handleForward}
        />

        {/* Toolbar */}
        <View className="flex-row justify-center items-center mt-6 gap-4">
          <ToolbarButton
            icon="text-fields"
            label="Appearance"
            onPress={handleAppearancePress}
          />
          <View className="h-4 w-px bg-border" />
          <ToolbarButton
            icon="speed"
            label="Speed Settings"
            onPress={handleSpeedPress}
          />
        </View>
      </View>
      {/* Speed Settings Modal */}
      <SpeedSettingsModal
        visible={showSpeedSettings}
        onClose={() => setShowSpeedSettings(false)}
        currentWpm={wpm}
        onWpmChange={setWpm}
      />

      {/* Appearance Settings Modal */}
      <AppearanceSettingsModal
        visible={showAppearanceSettings}
        onClose={() => setShowAppearanceSettings(false)}
        theme={theme}
        onThemeChange={setTheme}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        showORPHighlight={showORPHighlight}
        onORPHighlightChange={setShowORPHighlight}
        showFocusGuide={showFocusGuide}
        onFocusGuideChange={setShowFocusGuide}
      />
    </SafeAreaView>
  );
}
