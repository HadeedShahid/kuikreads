import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components";

export default function LibraryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-2xl font-sans-bold mb-2">Library</Text>
        <Text className="text-text-muted text-center">
          Your books will appear here
        </Text>
      </View>
    </SafeAreaView>
  );
}
