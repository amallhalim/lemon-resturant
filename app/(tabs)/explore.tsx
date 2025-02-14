import { StyleSheet, View, Text, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import MainLayout from '@/components/layouts/MainLayout';
import MenuFlatList from "../../pages/menu/MenuFlatList";

export default function TabTwoScreen() {
  return (
    <MainLayout>
      {/* Parallax Scroll Header */}
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        }
      >
        {/* Header Container */}
        <View style={styles.headerContainer}>
          <ThemedText style={styles.contentText}>
            Welcome to the Menu Screen! Scroll to see our delicious items.
          </ThemedText>
        </View>
      </ParallaxScrollView>

      {/* Menu List (FlatList) */}
      <View style={styles.menuContainer}>
        <MenuFlatList />
      </View>

      {/* Colorful Flexbox Layout */}
      <View style={styles.colorBlocks}>
        <View style={[styles.block, { backgroundColor: 'green', flex: 2 }]} />
        <View style={[styles.block, { backgroundColor: 'red', flex: 1 }]} />
        <View style={[styles.block, { backgroundColor: 'darkorange', flex: 1 }]} />
      </View>

      {/* Footer Text */}
      <Text style={styles.footerText}>Enjoy your meal! 🍽️</Text>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  headerImage: {
    marginBottom: -50,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  colorBlocks: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    marginTop: 20,
  },
  block: {
    height: '100%',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginVertical: 20,
  },
});
