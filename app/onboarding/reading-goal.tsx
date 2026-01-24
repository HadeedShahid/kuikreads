import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Text, Button, ProgressDots, RadioCard, Select } from "@/components";

const READING_GOALS = [
  {
    id: "50-books",
    icon: "menu-book" as const,
    title: "Read 50 books",
    description: "Complete a challenge this year.",
  },
  {
    id: "work",
    icon: "work-outline" as const,
    title: "Read faster for work",
    description: "Get through docs in half the time.",
  },
  {
    id: "daily-habit",
    icon: "coffee" as const,
    title: "Daily reading habit",
    description: "Build a consistent routine.",
  },
  {
    id: "explore",
    icon: "explore" as const,
    title: "Just explore",
    description: "No pressure, just enjoy content.",
  },
];

const TIME_OPTIONS = [
  { label: "5 minutes", value: "5" },
  { label: "10 minutes", value: "10" },
  { label: "20 minutes", value: "20" },
  { label: "30 minutes", value: "30" },
  { label: "1 hour", value: "60" },
];

export default function ReadingGoalScreen() {
  const [selectedGoal, setSelectedGoal] = useState("daily-habit");
  const [dailyTime, setDailyTime] = useState("20");

  const handleContinue = () => {
    // TODO: Save reading goal preferences to async storage for later
    console.log("Selected goal:", selectedGoal);
    console.log("Daily time:", dailyTime);
    // Navigate to auth to create account
    router.replace("/auth");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerClassName="max-w-[480px] w-full self-center"
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Dots */}
        <ProgressDots total={3} current={2} className="py-8" />

        {/* Header */}
        <View className="px-6">
          <Text className="text-[32px] font-sans-bold tracking-tight text-center pb-2">
            Set Your Reading Goal
          </Text>
          <Text className="text-base text-text-muted text-center mb-8">
            Personalize your journey with KuikReads
          </Text>
        </View>

        {/* Goal Options */}
        <View className="px-4 gap-3">
          {READING_GOALS.map((goal) => (
            <RadioCard
              key={goal.id}
              icon={goal.icon}
              title={goal.title}
              description={goal.description}
              selected={selectedGoal === goal.id}
              onPress={() => setSelectedGoal(goal.id)}
            />
          ))}
        </View>

        {/* Daily Time Select */}
        <View className="mt-10 px-6">
          <Select
            label="Daily reading time goal"
            options={TIME_OPTIONS}
            value={dailyTime}
            onChange={setDailyTime}
          />
        </View>

        {/* Footer */}
        <View className="mt-auto pt-10 pb-10 px-6">
          <Button variant="primary" onPress={handleContinue}>
            Start Reading
          </Button>
          <Text className="text-center text-xs text-text-muted mt-4">
            You can change this anytime in settings.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
