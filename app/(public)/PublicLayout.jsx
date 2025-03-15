import { Redirect, Stack } from 'expo-router';
import useUserStore from "../../store/userStore"

export default function PublicLayout() {
    const user = useUserStore(state=>state.user)

  // If still loading, don't redirect yet
//   if (isLoading) {
//     return null;
//   }

  // If authenticated, redirect to private routes
  if (user) {
    return <Redirect href="/(private)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: true, title: 'Login' }} />
      <Stack.Screen name="signup" options={{ headerShown: true, title: 'Sign Up' }} />
    </Stack>
  );
}