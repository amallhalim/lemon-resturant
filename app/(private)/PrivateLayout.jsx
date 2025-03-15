import { Redirect, Stack } from 'expo-router';


export default function PrivateLayout() {

    const user = useUserStore(state=>state.user)

  // If still loading, don't redirect yet
//   if (isLoading) {
//     return null;
//   }

// Protect private routes
if (!user) {
  console.log("🚀 ~ PrivateLayout ~ user:", user)
  return <Redirect href="/(public)/login" />;
}


  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="users/[id]" options={{ headerShown: true, title: 'User Profile' }} />
      <Stack.Screen name="dishs/[id]" options={{ headerShown: true, title: 'Dish Details' }} />
      <Stack.Screen name="Test" /> 
    </Stack>
  );
}