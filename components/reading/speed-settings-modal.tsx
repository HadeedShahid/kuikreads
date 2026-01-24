import { View, Modal, Pressable } from "react-native";
import { Text } from "../ui/text";
import { MaterialIcons } from "@expo/vector-icons";

interface SpeedSettingsModalProps {
  visible: boolean;
  onClose: () => void;
  currentWpm: number;
  onWpmChange: (wpm: number) => void;
}

const WPM_PRESETS = [
  { value: 150, label: "Slow", description: "Great for beginners" },
  { value: 250, label: "Normal", description: "Comfortable reading" },
  { value: 350, label: "Fast", description: "Experienced readers" },
  { value: 450, label: "Very Fast", description: "Speed readers" },
  { value: 600, label: "Expert", description: "Advanced training" },
];

export function SpeedSettingsModal({
  visible,
  onClose,
  currentWpm,
  onWpmChange,
}: SpeedSettingsModalProps) {
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
              <Text className="text-lg font-sans-bold">Speed Settings</Text>
              <Pressable
                onPress={onClose}
                className="p-2 -mr-2"
                accessibilityLabel="Close"
              >
                <MaterialIcons name="close" size={24} color="#181511" />
              </Pressable>
            </View>

            {/* Current Speed Display */}
            <View className="items-center py-6">
              <Text className="text-5xl font-sans-bold text-primary">
                {currentWpm}
              </Text>
              <Text className="text-text-muted text-sm mt-1">
                words per minute
              </Text>
            </View>

            {/* Preset Options */}
            <View className="px-4 pb-6">
              {WPM_PRESETS.map((preset) => {
                const isSelected = currentWpm === preset.value;
                return (
                  <Pressable
                    key={preset.value}
                    onPress={() => onWpmChange(preset.value)}
                    className={`flex-row items-center justify-between p-4 rounded-xl mb-2 ${
                      isSelected ? "bg-primary/10 border-2 border-primary" : "bg-white border-2 border-transparent"
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
                    <View>
                      <Text
                        className={`font-sans-semibold ${
                          isSelected ? "text-primary" : "text-text"
                        }`}
                      >
                        {preset.label}
                      </Text>
                      <Text className="text-text-muted text-sm">
                        {preset.description}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-2">
                      <Text
                        className={`font-sans-bold ${
                          isSelected ? "text-primary" : "text-text-muted"
                        }`}
                      >
                        {preset.value}
                      </Text>
                      {isSelected && (
                        <MaterialIcons name="check-circle" size={24} color="#ec9213" />
                      )}
                    </View>
                  </Pressable>
                );
              })}
            </View>

            {/* Safe area padding */}
            <View className="h-8" />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
