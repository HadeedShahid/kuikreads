import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { cn } from "@/lib/cn";
import { Button } from "./ui/button";

interface SocialAuthButtonsProps {
  onGooglePress?: () => void;
  onApplePress?: () => void;
  className?: string;
}

function GoogleIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <Path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <Path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </Svg>
  );
}

function AppleIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        d="M17.05 20.28c-.96 0-2.04-.6-3.23-.6-1.2 0-2.14.57-3.2.57-1.77 0-4.33-2.17-4.33-5.2 0-3.08 1.94-4.7 3.8-4.7 1 0 1.83.62 2.65.62.77 0 1.84-.71 3-.71 1.17 0 2.24.53 2.92 1.54-2.52 1.35-2.1 4.77.46 5.86-1.14 1.76-2.43 3.42-4.07 3.42zm-2.72-13.84c.54-.65.91-1.56.91-2.47 0-.12-.02-.24-.03-.34-.86.03-1.89.58-2.51 1.3-.53.6-.99 1.52-.99 2.45 0 .14.02.26.04.34.95.07 1.9-.45 2.58-1.28z"
        fill="white"
      />
    </Svg>
  );
}

export function SocialAuthButtons({
  onGooglePress,
  onApplePress,
  className,
}: SocialAuthButtonsProps) {
  return (
    <View className={cn("gap-3", className)}>
      <Button variant="social" onPress={onGooglePress} icon={<GoogleIcon />}>
        Continue with Google
      </Button>

      <Button variant="social-dark" onPress={onApplePress} icon={<AppleIcon />}>
        Continue with Apple
      </Button>
    </View>
  );
}
