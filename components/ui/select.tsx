import { useState } from "react";
import { View, Pressable, Modal, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/cn";
import { Text } from "./text";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <View className={className}>
      {label && (
        <Text className="text-sm font-sans-medium text-text-muted mb-3">
          {label}
        </Text>
      )}

      {/* Trigger */}
      <Pressable
        onPress={() => setIsOpen(true)}
        className="flex-row items-center justify-between bg-white rounded-xl h-14 px-4"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <Text className={cn(
          "text-base font-sans-medium",
          selectedOption ? "text-text" : "text-text-muted"
        )}>
          {selectedOption?.label || placeholder}
        </Text>
        <MaterialIcons name="expand-more" size={24} color="#897961" />
      </Pressable>

      {/* Modal */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setIsOpen(false)}
        >
          <View className="bg-white rounded-t-2xl max-h-[50%]">
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 py-4 border-b border-border">
              <Text className="text-lg font-sans-semibold">
                {label || "Select"}
              </Text>
              <Pressable onPress={() => setIsOpen(false)}>
                <MaterialIcons name="close" size={24} color="#181511" />
              </Pressable>
            </View>

            {/* Options */}
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleSelect(item.value)}
                  className={cn(
                    "flex-row items-center justify-between px-4 py-4 border-b border-border/50",
                    item.value === value && "bg-primary/5"
                  )}
                >
                  <Text className={cn(
                    "text-base",
                    item.value === value ? "font-sans-semibold text-primary" : "font-sans"
                  )}>
                    {item.label}
                  </Text>
                  {item.value === value && (
                    <MaterialIcons name="check" size={24} color="#ec9213" />
                  )}
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
