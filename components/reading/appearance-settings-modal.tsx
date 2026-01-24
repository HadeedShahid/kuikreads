import { View, Modal, Pressable, Switch } from "react-native";
import { Text } from "../ui/text";
import { MaterialIcons } from "@expo/vector-icons";

export type ReadingTheme = "light" | "dark" | "sepia";

interface AppearanceSettingsModalProps {
  visible: boolean;
  onClose: () => void;
  theme: ReadingTheme;
  onThemeChange: (theme: ReadingTheme) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  showORPHighlight: boolean;
  onORPHighlightChange: (show: boolean) => void;
  showFocusGuide: boolean;
  onFocusGuideChange: (show: boolean) => void;
}

const THEME_OPTIONS: { value: ReadingTheme; label: string; bg: string; text: string }[] = [
  { value: "light", label: "Light", bg: "#FAF9F7", text: "#181511" },
  { value: "dark", label: "Dark", bg: "#1a1a1a", text: "#ffffff" },
  { value: "sepia", label: "Sepia", bg: "#f4ecd8", text: "#5c4b37" },
];

const FONT_SIZE_OPTIONS = [
  { value: 32, label: "Small" },
  { value: 40, label: "Medium" },
  { value: 48, label: "Large" },
  { value: 56, label: "Extra Large" },
];

export function AppearanceSettingsModal({
  visible,
  onClose,
  theme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
  showORPHighlight,
  onORPHighlightChange,
  showFocusGuide,
  onFocusGuideChange,
}: AppearanceSettingsModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 bg-black/50 justify-end"
        onPress={onClose}
      >
        <Pressable onPress={(e) => e.stopPropagation()}>
          <View className="bg-background rounded-t-3xl">
            {/* Header */}
            <View className="flex-row items-center justify-between px-6 py-4 border-b border-border/30">
              <Text className="text-lg font-sans-bold">Appearance</Text>
              <Pressable
                onPress={onClose}
                className="p-2 -mr-2"
                accessibilityLabel="Close"
              >
                <MaterialIcons name="close" size={24} color="#181511" />
              </Pressable>
            </View>

            {/* Theme Selection */}
            <View className="px-6 pt-5 pb-4">
              <Text className="text-sm font-sans-semibold text-text-muted mb-3">
                Theme
              </Text>
              <View className="flex-row gap-3">
                {THEME_OPTIONS.map((option) => {
                  const isSelected = theme === option.value;
                  return (
                    <Pressable
                      key={option.value}
                      onPress={() => onThemeChange(option.value)}
                      className={`flex-1 rounded-xl p-3 items-center border-2 ${
                        isSelected ? "border-primary" : "border-transparent"
                      }`}
                      style={{
                        backgroundColor: option.bg,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                    >
                      <Text
                        style={{ color: option.text }}
                        className="font-sans-semibold text-base"
                      >
                        Aa
                      </Text>
                      <Text
                        style={{ color: option.text, opacity: 0.7 }}
                        className="text-xs mt-1"
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Font Size Selection */}
            <View className="px-6 pb-4">
              <Text className="text-sm font-sans-semibold text-text-muted mb-3">
                Font Size
              </Text>
              <View className="flex-row gap-2">
                {FONT_SIZE_OPTIONS.map((option) => {
                  const isSelected = fontSize === option.value;
                  return (
                    <Pressable
                      key={option.value}
                      onPress={() => onFontSizeChange(option.value)}
                      className={`flex-1 rounded-xl py-3 items-center ${
                        isSelected
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-white border-2 border-transparent"
                      }`}
                      style={
                        !isSelected
                          ? {
                              shadowColor: "#000",
                              shadowOffset: { width: 0, height: 1 },
                              shadowOpacity: 0.05,
                              shadowRadius: 2,
                              elevation: 1,
                            }
                          : undefined
                      }
                    >
                      <Text
                        className={`font-sans-semibold ${
                          isSelected ? "text-primary" : "text-text"
                        }`}
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Toggle Options */}
            <View className="px-6 pb-6">
              <Text className="text-sm font-sans-semibold text-text-muted mb-3">
                Display Options
              </Text>

              {/* ORP Highlight Toggle */}
              <View className="flex-row items-center justify-between py-3 border-b border-border/20">
                <View>
                  <Text className="font-sans-semibold">Focus Letter Highlight</Text>
                  <Text className="text-text-muted text-sm">
                    Highlight the optimal focus point
                  </Text>
                </View>
                <Switch
                  value={showORPHighlight}
                  onValueChange={onORPHighlightChange}
                  trackColor={{ false: "#d1d5db", true: "#ec9213" }}
                  thumbColor="#ffffff"
                />
              </View>

              {/* Focus Guide Toggle */}
              <View className="flex-row items-center justify-between py-3">
                <View>
                  <Text className="font-sans-semibold">Focus Guide</Text>
                  <Text className="text-text-muted text-sm">
                    Show guide line below word
                  </Text>
                </View>
                <Switch
                  value={showFocusGuide}
                  onValueChange={onFocusGuideChange}
                  trackColor={{ false: "#d1d5db", true: "#ec9213" }}
                  thumbColor="#ffffff"
                />
              </View>
            </View>

            {/* Safe area padding */}
            <View className="h-8" />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
