import { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "@/components";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

// Sample data
const STATS = {
  booksRead: 12,
  streak: 45,
  wpm: 320,
};

const CURRENT_BOOK = {
  id: "1",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  progress: 65,
  coverUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBliuSpVqzW2O3po8l4D8rjI6D99IUZJNuHoqAbHfYIMt4lMGvuChKyvI-AE4yLpz0bnkwP4Alvjj_8fDy2tEGWIq7dfikk4_6VndDlGML1BnX7X1IVR5M-Ej-3Jmollc-L-RovsdF31mGRho_uG-cEcnakG_I7uo8LHkxDOLKLjp6fEnusDk5rq6WULHZLOKiZs77yeizAkHb18SmbrrDGR3mITKfYSVLQDyLtPtEcpw4DH1-_LfywdT46h-XJvaxvMSYCCcWW7Ag",
};

const BOOKS = [
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    coverUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnRUbcarLt6wd33tpMazfbvmcJhVsUUHElveSZbnIKuS8l76R0S1Dvl12uHp30usRTcDSCLarBmnss0W5Of-0wIp9GR1HobO6MhS7ONbkxCJVTA1PckgrwQqZ1H8UVrBsLyiLmMkrRmYaY5lrwUKKxI3ZcOkDmNCflSvO5e7EgD0CU5tLfYFvpKYExgJ7NsZ_3leCa3EYvI4d55Q9b9B8w4htIJOz1S9ADpsTzVbZAWihClgg8pHYo3STT0X28HFQMRR6UWxLOQ7I",
  },
  {
    id: "3",
    title: "Dune: Part One",
    author: "Frank Herbert",
    coverUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWNnDfqSF3UsaGUn-DqvBBrTXcWbA4GFJEe5wnnqHmMnh8rMCQB2wK9uqwR-4N9eJLOH1qniv6Z6nQZEgf1CLP6EnZ7tI368iLCTe0SXZSM_tlBxWmDPQpkI3S_KR0dx857ET3Fd0L2IsWRF_IZh_9RuhgCa2CFXXBXcEyjx-9Mae51GXpkrE8CXeUzMkHCFaWDNVoZewESjfk0rGhf4MOPsQ06aQsT4T-fyKYKVxIVZvvYX4Nai5gr04fvyuy7EW7uNssYgmZqQU",
  },
  {
    id: "4",
    title: "Deep Work",
    author: "Cal Newport",
    coverUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaxK3owDpOVKNRKuWUR7v6jpP-pJFoIiAI0u9hKXf3Nuk772lUsHmOxYZ6-eDYKV-vOrEY6OubRsWeSb8d_IXYfR3_pU5xiHqLJfb4iYmpj2kS3aQ2FIPo9xM_ng3-aCR2RbWd3RInx3xYa5t-vXafvNdV6T1xMgms-N3sCsEB220_eB9mZ7Vl4Hf3JehabLjIAU5M5I9nCfuOuofdxRmO7EbwQBX6OJLpfQq6xIll-yezAr-HWQrDQnXThoucZjittXsOENgZ9VU",
  },
  {
    id: "5",
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    coverUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfzz6hSZSNfmWV0XaurTcSJjKBxwVPlFtX4C0agrrubxuG_e3UFO5k9VvJWHbOvbo0P7dRo3hPHknndFElHJQOG6S9NX96ilRkxaiDvVqvSliFN0Ag3khQ_cz-s1-hbWMxZ5Kj5qHHnEO7YL2ULGhYG-S3SdNxWQIdTTO_h0mxp4d3mX5JmLixqlkaLBtz9iSkXEcmW2ivfERBahtxje7WXy03NzJPsuGKn17-z5acRoSOY38XjO_A2AMtOJrDV8luWbDU3sUOjGA",
  },
];

const FILTERS = ["All Books", "In Progress", "To Read", "Finished"];

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Books");

  const handleResumeReading = () => {
    router.push("/(tabs)/read");
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-3">
          <Text className="text-2xl font-sans-bold">Library</Text>
          <View className="flex-row items-center gap-3">
            <Pressable className="p-2">
              <MaterialIcons name="notifications-none" size={24} color="#897961" />
            </Pressable>
            <View
              className="w-10 h-10 rounded-full bg-primary/20 items-center justify-center"
            >
              <MaterialIcons name="person" size={24} color="#ec9213" />
            </View>
          </View>
        </View>

        {/* Search & Filter */}
        <View className="px-4 py-2 flex-row gap-2">
          <View className="flex-1 flex-row items-center h-12 bg-white rounded-xl border border-border px-4">
            <MaterialIcons name="search" size={22} color="#897961" />
            <TextInput
              className="flex-1 ml-3 text-base"
              placeholder="Search your books..."
              placeholderTextColor="#897961"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <Pressable className="w-12 h-12 items-center justify-center bg-white rounded-xl border border-border">
            <MaterialIcons name="tune" size={22} color="#897961" />
          </Pressable>
        </View>

        {/* Stats Summary Widget */}
        <View className="px-4 py-3">
          <LinearGradient
            colors={["#fff1e6", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-xl p-5 border border-[#fff1e6]"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Text className="text-xs font-sans-semibold uppercase tracking-wider text-text-muted mb-4">
              Your Progress
            </Text>
            <View className="flex-row justify-between items-center">
              <View className="flex-1 items-center border-r border-[#e6dfdb]">
                <Text className="text-2xl font-sans-bold text-primary">
                  {STATS.booksRead}
                </Text>
                <Text className="text-[10px] font-sans-medium text-text-muted uppercase">
                  Read
                </Text>
              </View>
              <View className="flex-1 items-center border-r border-[#e6dfdb]">
                <Text className="text-2xl font-sans-bold text-primary">
                  {STATS.streak}
                </Text>
                <Text className="text-[10px] font-sans-medium text-text-muted uppercase">
                  Streak
                </Text>
              </View>
              <View className="flex-1 items-center">
                <Text className="text-2xl font-sans-bold text-primary">
                  {STATS.wpm}
                </Text>
                <Text className="text-[10px] font-sans-medium text-text-muted uppercase">
                  WPM
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Continue Reading Section */}
        <View className="px-4 pb-4">
          <View className="flex-row items-center gap-2 mb-3">
            <MaterialIcons name="auto-stories" size={20} color="#ec9213" />
            <Text className="text-lg font-sans-bold">Continue Reading</Text>
          </View>
          <View
            className="flex-row gap-4 rounded-xl bg-white p-4 border border-[#f4f2f0]"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: CURRENT_BOOK.coverUrl }}
              className="w-24 rounded-lg"
              style={{ aspectRatio: 2 / 3 }}
              resizeMode="cover"
            />
            <View className="flex-1 justify-between py-1">
              <View>
                <Text className="text-xs font-sans-bold text-primary uppercase tracking-wide">
                  {CURRENT_BOOK.progress}% Completed
                </Text>
                <Text className="text-lg font-sans-bold mt-1 leading-tight">
                  {CURRENT_BOOK.title}
                </Text>
                <Text className="text-sm font-sans-medium text-text-muted">
                  {CURRENT_BOOK.author}
                </Text>
              </View>
              <View className="mt-4">
                <View className="w-full h-1.5 bg-[#f4f2f0] rounded-full mb-3">
                  <View
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${CURRENT_BOOK.progress}%` }}
                  />
                </View>
                <Pressable
                  onPress={handleResumeReading}
                  className="flex-row items-center justify-center gap-2 h-10 bg-primary rounded-lg"
                  style={({ pressed }) => ({
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  })}
                >
                  <MaterialIcons name="play-arrow" size={20} color="white" />
                  <Text className="text-sm font-sans-bold text-white">
                    Resume Reading
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          className="mb-4"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full ${
                  isActive
                    ? "bg-primary"
                    : "bg-white border border-border"
                }`}
              >
                <Text
                  className={`text-sm font-sans-semibold ${
                    isActive ? "text-white" : "text-text-muted"
                  }`}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Book Grid */}
        <View className="px-4 pb-24">
          <View className="flex-row flex-wrap" style={{ marginHorizontal: -8 }}>
            {BOOKS.map((book) => (
              <View key={book.id} className="w-1/2 p-2">
                <Pressable
                  className="flex-col gap-2"
                  style={({ pressed }) => ({
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  })}
                >
                  <Image
                    source={{ uri: book.coverUrl }}
                    className="w-full rounded-xl"
                    style={{
                      aspectRatio: 2 / 3,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                    }}
                    resizeMode="cover"
                  />
                  <View>
                    <Text
                      className="text-sm font-sans-bold"
                      numberOfLines={1}
                    >
                      {book.title}
                    </Text>
                    <Text className="text-xs text-text-muted">
                      {book.author}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <Pressable
        className="absolute bottom-6 right-6 w-14 h-14 items-center justify-center rounded-full bg-primary"
        style={({ pressed }) => ({
          transform: [{ scale: pressed ? 0.9 : 1 }],
          shadowColor: "#ec9213",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 8,
        })}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </Pressable>
    </SafeAreaView>
  );
}
