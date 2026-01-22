import { cn } from "@/lib/cn";
import { View } from "react-native";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { PasswordInput } from "./ui/password-input";

interface AuthFormProps {
  mode: "signup" | "login";
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  className?: string;
}

export function AuthForm({
  mode,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading,
  className,
}: AuthFormProps) {
  const buttonText = mode === "signup" ? "Create Account" : "Log In";

  return (
    <Card className={cn("mb-8", className)}>
      <View className="gap-5">
        <Input
          label="Email Address"
          placeholder="Enter email"
          value={email}
          onChangeText={onEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={onPasswordChange}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
        />

        <Button
          variant="primary"
          onPress={onSubmit}
          disabled={isLoading}
          className="mt-2"
        >
          {isLoading ? "Loading..." : buttonText}
        </Button>
      </View>
    </Card>
  );
}
