import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import useUserStore from '../../store/userStore';

export default function PrivateLayout() {
  const router = useRouter();
const user = useUserStore(state=>state.user)
  console.log("🚀 ~ PrivateLayout ~ user:", user)
  // Log user state for debugging
  // // Initialize authentication check on mount
  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // Handle redirect in useEffect to avoid render phase navigation
  useEffect(() => {
    if ( !user?.id) {
      console.log("Redirecting to /login because user.id is falsy");
      // router.replace('/(public)/login');
      // router.push('/NotAutorized')
    router.push('/Login')


    }
  }, [user, router]);



  // Only render the stack if user is authenticated
  if (!user?.id) {
    return null; // Redundant check, but ensures consistency
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