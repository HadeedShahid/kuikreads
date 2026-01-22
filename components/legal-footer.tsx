import { View, Pressable } from "react-native";
import { cn } from "@/lib/cn";
import { Text } from "./ui/text";

interface LegalFooterProps {
  onSkipPress?: () => void;
  onTermsPress?: () => void;
  onPrivacyPress?: () => void;
  className?: string;
}

export function LegalFooter({
  onSkipPress,
  onTermsPress,
  onPrivacyPress,
  className,
}: LegalFooterProps) {
  return (
    <View className={cn("items-center gap-4", className)}>
      <Pressable onPress={onSkipPress}>
        <Text variant="link">Continue without account</Text>
      </Pressable>

      <Text variant="caption" className="text-center px-8 leading-relaxed">
        By creating an account, you agree to our{" "}
        <Text
          variant="caption"
          className="underline"
          onPress={onTermsPress}
        >
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text
          variant="caption"
          className="underline"
          onPress={onPrivacyPress}
        >
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
}
