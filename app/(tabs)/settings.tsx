import { Button, Text } from "@/components";
import { supabase } from "@/lib/supabase";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-4 pt-8">
        <Text className="text-2xl font-sans-bold mb-8">Settings</Text>

        <View className="flex-1" />

        <View className="pb-8">
          <Button variant="secondary" onPress={handleSignOut}>
            Sign Out
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
