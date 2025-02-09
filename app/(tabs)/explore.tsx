import { StyleSheet, Image, Platform, View } from 'react-native';
import { Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import MainLayout from '@/components/layouts/MainLayout';
import MenuList from "../../pages/menu/MenuList"
import MenuFlatList from "../../pages/menu/MenuFlatList"
export default function TabTwoScreen() {
  return (
    <MainLayout >
    {/* <ThemedView style={styles.container}>
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
      <MenuList/>
        <ThemedText style={styles.contentText}>
          66666666-----------8888888888--------6666666Welcome to Tab Two! Scroll to see the parallax effect.
        </ThemedText>
        <Text>   hello from text </Text>
        <View style={styles.footerContainer}>
      </View>
      </View>
      </ParallaxScrollView>
    </ThemedView> */}
    <View style={{width:"100%",height:"100%"}}>

    <MenuFlatList/>
    </View>
<Text>666666666666666666666666666666666666666666666666</Text>
    <View
      style={[
        // styles.container,
        {
          width:"100%",height:"100%",
          // flex: 1,
          padding: 20,
          // Try setting 
          // `flexDirection` to `"row"`.
          // flexDirection: 'column',
          flexDirection: 'row',
          backgroundColor:"black"
        },
      ]}>
      <View style={{flex: 2, backgroundColor: 'green'}} />
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 1, backgroundColor: 'darkorange'}} />
    </View>
    <Text>666666666666666666666666666666666666666666666666</Text>









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
