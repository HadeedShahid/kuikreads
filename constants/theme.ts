export const colors = {
  primary: "#ec9213",
  primaryHover: "#d98511",

  background: "#f8f7f6",
  parchment: "#fdfaf6",

  text: "#181511",
  textMuted: "#897961",

  border: "#e6e1db",
  borderLight: "rgba(230, 225, 219, 0.3)",

  white: "#ffffff",
  black: "#000000",

  // Card shadows
  cardShadow: "rgba(0, 0, 0, 0.04)",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
} as const;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
} as const;

export const fontFamily = {
  regular: "Newsreader_400Regular",
  medium: "Newsreader_500Medium",
  semibold: "Newsreader_600SemiBold",
  bold: "Newsreader_700Bold",
  italic: "Newsreader_400Regular_Italic",
} as const;
