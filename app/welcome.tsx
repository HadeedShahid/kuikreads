import { View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { AppLogo, Text, Button } from "@/components";

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.push("/onboarding/reading-goal");
  };

  const handleSignIn = () => {
    router.push("/auth");
  };


  return (
    <LinearGradient
      colors={["#FFFDF5", "#F5E6D3"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 max-w-[480px] w-full self-center">
          {/* Logo and Branding Section */}
          <View className="pt-12 px-6">
            <AppLogo />
          </View>

          {/* Hero Illustration */}
          <View className="flex-1 items-center justify-center px-8 py-10">
            <View className="relative w-full aspect-square max-w-[320px]">
              {/* Main Image */}
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUyByAHf9_xYjnKo3gvEiEZVgwkaRxP7vy3ftTE9VyIzC1IJ-rq0dgw6urEGcMORMeTHxhuPlViS2bL-fRvnuTGfWDMqZnFDpusYV0Pf4Z6qFQEq0Kjofran1qcxoWQ1oyBn8Djk_d8NSxcfnKrlaO01UdDT2Zm0fUVYlwtk0S5XtUANtt0G378WsiMMas5JevvR8PRlGT2dWDV7u3D-ysSmEk2J_x2dp0rt-No7SXf1RJu8Mo---PplwPP2pyEPKim54aSWkqLq8" }}
                className="w-full h-full rounded-3xl"
                resizeMode="cover"
                style={{
                  borderWidth: 4,
                  borderColor: "rgba(255,255,255,0.5)",
                }}
              />
              {/* Decorative Badge - Top Right */}
              <View className="absolute -top-4 -right-4 bg-primary/20 p-3 rounded-full">
                <MaterialIcons name="menu-book" size={24} color="#ec9213" />
              </View>
              {/* Decorative Badge - Bottom Left */}
              <View className="absolute -bottom-2 -left-4 bg-[#bf5b30]/20 p-4 rounded-full">
                <MaterialIcons name="timer" size={24} color="#bf5b30" />
              </View>
            </View>
          </View>

          {/* Footer Actions Section */}
          <View className="px-6 pb-12">
            {/* Intro Text */}
            <Text className="text-center text-text-muted text-sm leading-relaxed px-4 mb-4">
              Join thousands of readers who are mastering their lists with our
              focus-first approach.
            </Text>

            {/* Get Started Button */}
            <Button variant="primary" onPress={handleGetStarted}>
              Get Started
            </Button>

            {/* Sign In Link */}
            <Pressable onPress={handleSignIn} className="mt-6">
              <Text className="text-text/80 text-sm font-sans-semibold text-center">
                Already have an account? <Text className="text-primary font-sans-bold">Sign In</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
