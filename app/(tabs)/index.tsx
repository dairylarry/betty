import { Text, View } from 'react-native';

export default function ActivePactsScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-white px-6">
      <Text className="text-xl font-semibold text-neutral-900">No pacts yet</Text>
      <Text className="text-center text-neutral-500">
        Create a pact and invite friends as witnesses to get started.
      </Text>
    </View>
  );
}
