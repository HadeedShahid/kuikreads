import {
  AuthForm,
  Divider,
  Header,
  SegmentedControl,
  SocialAuthButtons
} from "@/components";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const mode = selectedTab === 0 ? "signup" : "login";

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();
    const trimmedUsername = username.trim();

    if (mode === "signup" && !trimmedUsername) {
      Alert.alert("Error", "Please enter a username");
      return;
    }

    if (!trimmedEmail || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (mode === "signup" && password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters");
      return;
    }

    if (mode === "signup" && trimmedUsername.length < 3) {
      Alert.alert("Error", "Username must be at least 3 characters");
      return;
    }

    setIsLoading(true);

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else if (data.user) {
        // Update the profiles table with the username
        const { error: profileError } = await supabase
          .from("profiles")
          .update({ username: trimmedUsername })
          .eq("id", data.user.id);

        if (profileError) {
          Alert.alert("Error", profileError.message);
        } else {
          // Navigate to onboarding after successful signup
          router.replace("/onboarding/reading-goal");
        }
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password,
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        router.replace("/");
      }
    }

    setIsLoading(false);
  };

  const handleGooglePress = () => {
    console.log("Google sign in");
  };

  const handleApplePress = () => {
    console.log("Apple sign in");
  };

  const handleSkip = () => {
    console.log("Continue without account");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerClassName="max-w-[480px] w-full self-center"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Header
          title="KuikReads"
          onBackPress={() => router.back()}
        />

        {/* Main Content */}
        <View className="px-4">
          {/* Segmented Control */}
          <View className="py-6">
            <SegmentedControl
              options={["Sign Up", "Log In"]}
              selectedIndex={selectedTab}
              onSelect={setSelectedTab}
            />
          </View>

          {/* Auth Form */}
          <AuthForm
            mode={mode}
            username={username}
            email={email}
            password={password}
            onUsernameChange={setUsername}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onSubmit={handleSubmit}
            onForgotPassword={handleForgotPassword}
            isLoading={isLoading}
          />

          {/* Divider */}
          {/* <Divider text="or" className="mb-8" /> */}

          {/* Social Auth */}
          {/* <SocialAuthButtons
            onGooglePress={handleGooglePress}
            onApplePress={handleApplePress}
          /> */}

          {/* Footer */}
          {/* <LegalFooter
            onSkipPress={handleSkip}
            onTermsPress={() => console.log("Terms")}
            onPrivacyPress={() => console.log("Privacy")}
            className="mt-12 mb-8"
          /> */}
        </View>
      </ScrollView>

      {/* Bottom decorative line */}
      <View className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30" />
    </SafeAreaView>
  );
}
