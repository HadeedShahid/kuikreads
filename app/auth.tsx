import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Header,
  SegmentedControl,
  AuthForm,
  Divider,
  SocialAuthButtons,
  LegalFooter,
} from "@/components";

export default function AuthScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const mode = selectedTab === 0 ? "signup" : "login";

  const handleSubmit = async () => {
    setIsLoading(true);
    // TODO: Implement authentication
    console.log("Submit:", { mode, email, password });
    setTimeout(() => setIsLoading(false), 1000);
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
          onBackPress={() => console.log("Back pressed")}
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
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />

          {/* Divider */}
          <Divider text="or" className="mb-8" />

          {/* Social Auth */}
          <SocialAuthButtons
            onGooglePress={handleGooglePress}
            onApplePress={handleApplePress}
          />

          {/* Footer */}
          <LegalFooter
            onSkipPress={handleSkip}
            onTermsPress={() => console.log("Terms")}
            onPrivacyPress={() => console.log("Privacy")}
            className="mt-12 mb-8"
          />
        </View>
      </ScrollView>

      {/* Bottom decorative line */}
      <View className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30" />
    </SafeAreaView>
  );
}
