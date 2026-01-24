import { cn } from "@/lib/cn";
import { useEffect } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  UIManager,
  View,
} from "react-native";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { PasswordInput } from "./ui/password-input";
import { Text } from "./ui/text";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AuthFormProps {
  mode: "signup" | "login";
  username?: string;
  email: string;
  password: string;
  onUsernameChange?: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  onForgotPassword?: () => void;
  isLoading?: boolean;
  className?: string;
}

export function AuthForm({
  mode,
  username,
  email,
  password,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onForgotPassword,
  isLoading,
  className,
}: AuthFormProps) {
  const isSignup = mode === "signup";

  // Animate layout changes when mode switches
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [mode]);

  const content = {
    signup: {
      emailLabel: "Email Address",
      emailPlaceholder: "Enter email",
      passwordLabel: "Create Password",
      passwordPlaceholder: "Min. 8 characters",
      buttonText: "Create Account",
    },
    login: {
      emailLabel: "Email Address",
      emailPlaceholder: "Enter email",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      buttonText: "Log In",
    },
  };

  const copy = content[mode];

  return (
    <Card className={cn("mb-8", className)}>
      <View className="gap-5">
        {isSignup && (
          <Input
            label="What should we call you?"
            placeholder="Enter your name"
            value={username}
            onChangeText={onUsernameChange}
            autoCapitalize="words"
            autoComplete="username"
          />
        )}

        <Input
          label={copy.emailLabel}
          placeholder={copy.emailPlaceholder}
          value={email}
          onChangeText={onEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        <View>
          <PasswordInput
            label={copy.passwordLabel}
            placeholder={copy.passwordPlaceholder}
            value={password}
            onChangeText={onPasswordChange}
            autoComplete={isSignup ? "new-password" : "current-password"}
          />

          {!isSignup && (
            <Pressable onPress={onForgotPassword} className="self-end mt-2">
              <Text variant="link" className="text-sm">
                Forgot password?
              </Text>
            </Pressable>
          )}
        </View>

        <Button
          variant="primary"
          onPress={onSubmit}
          loading={isLoading}
          className={isSignup ? "mt-2" : ""}
        >
          {copy.buttonText}
        </Button>
      </View>
    </Card>
  );
}
