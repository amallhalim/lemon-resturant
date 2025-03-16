import { Redirect, Stack } from 'expo-router';
import useUserStore from "../../store/userStore"

export default function PublicLayout() {
    const user = useUserStore(state=>state.user)

  // If still loading, don't redirect yet
//   if (isLoading) {
//     return null;
//   }

  // If authenticated, redirect to private routes
  // if (user) {
  //   console.log("🚀 ~ PublicLayout ~ user:", user)
  //   return <Redirect href="/(privat)" />;
  // }

  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: true, title: 'Login' }} />
      <Stack.Screen name="SignUp" options={{ headerShown: true, title: 'Sign Up' }} />
      <Stack.Screen name="NotAutorized" options={{ headerShown: true, title: 'Not Autorized' }} />

    </Stack>
  );
}