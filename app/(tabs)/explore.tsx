import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import MainLayout from '@/components/layouts/MainLayout';

export default function TabTwoScreen() {
  return (
    <MainLayout >
    <ThemedView style={styles.container}>
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
     <View style={styles.headerContainer}>
        <ThemedText style={styles.contentText}>
          Welcome to Tab Two! Scroll to see the parallax effect.
        </ThemedText>
        <View style={styles.footerContainer}>
      </View>
      </View>
      </ParallaxScrollView>
    </ThemedView>
    </MainLayout>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'green',
  },
  headerContainer: {
    // position: 'absolute', // Fixes the header at the top
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 10, // Ensures it appears above the content
    // backgroundColor: '#fff', // Optional: Adjust background as needed
  },
  footerContainer: {
    // position: 'absolute', // Fixes the header at the top
    // bottom: 0,
    // left: 0,
    // right: 0,
    // zIndex: 10, // Ensures it appears above the content
    // backgroundColor: '#fff', // Optional: Adjust background as needed
  },
  headerImage: {
    // color: '#808080',
    // bottom: -90,
    // left: -35,
    // position: 'absolute',
  },
  contentText: {
    // padding: 16,
    // fontSize: 16,
    // textAlign: 'center',
  },
});
