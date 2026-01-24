import { View, Text } from "react-native";

interface RSVPWordDisplayProps {
  /** The word to display */
  word: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Whether to show the ORP highlight */
  showORPHighlight?: boolean;
  /** Whether to show the focus guide line */
  showFocusGuide?: boolean;
}

/**
 * Calculate the Optimal Recognition Point (ORP) index for a word.
 */
function calculateORPIndex(word: string): number {
  const length = word.length;

  if (length <= 1) return 0;
  if (length <= 5) return 1;
  if (length <= 9) return 2;
  if (length <= 13) return 3;
  return 4;
}

/**
 * Strip leading punctuation from word for ORP calculation.
 */
function getLeadingPunctuationOffset(word: string): number {
  let offset = 0;
  const punctuationRegex = /^[^\w]/;

  while (offset < word.length && punctuationRegex.test(word[offset])) {
    offset++;
  }

  return offset;
}

export function RSVPWordDisplay({
  word,
  fontSize = 40,
  showORPHighlight = true,
  showFocusGuide = true,
}: RSVPWordDisplayProps) {
  const textStyle = {
    fontSize,
    fontWeight: "700" as const,
    color: "#181511",
    letterSpacing: -0.5,
  };

  // Handle empty/null word
  if (!word || word.trim().length === 0) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 32 }}>
        {/* Focus guide */}
        {showFocusGuide && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: "#ec9213",
              opacity: 0.3,
            }}
          />
        )}
        <Text style={{ ...textStyle, color: "#897961" }}>—</Text>
      </View>
    );
  }

  // Calculate ORP with punctuation offset
  const punctuationOffset = getLeadingPunctuationOffset(word);
  const wordWithoutLeadingPunctuation = word.slice(punctuationOffset);
  const orpIndexInCleanWord = calculateORPIndex(wordWithoutLeadingPunctuation);
  const orpIndex = punctuationOffset + orpIndexInCleanWord;

  // Ensure ORP index is within bounds
  const safeORPIndex = Math.min(orpIndex, word.length - 1);

  // Split word into three parts: before ORP, ORP letter, after ORP
  const beforeORP = word.slice(0, safeORPIndex);
  const orpLetter = word[safeORPIndex];
  const afterORP = word.slice(safeORPIndex + 1);

  const orpStyle = {
    ...textStyle,
    color: showORPHighlight ? "#ec9213" : "#181511",
  };

  return (
    <View style={{ width: "100%", alignItems: "center", paddingVertical: 24 }}>
      {/* Three-column layout: before | ORP | after */}
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        {/* Left side - before ORP (right-aligned to meet the center) */}
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={textStyle}>{beforeORP}</Text>
        </View>

        {/* Center - ORP letter (fixed at center) */}
        <Text style={orpStyle}>{orpLetter}</Text>

        {/* Right side - after ORP (left-aligned from center) */}
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={textStyle}>{afterORP}</Text>
        </View>
      </View>

      {/* Focus guide - small line under the ORP */}
      {showFocusGuide && (
        <View
          style={{
            width: 1,
            height: 10,
            backgroundColor: "#e5e7eb",
            marginTop: 6,
            borderRadius: 1,
          }}
        />
      )}
    </View>
  );
}
