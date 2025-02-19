/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    font: {
      secondary: "#32343E",
      primary: "#ED7A63",
      gray: "#32343E",
      lightGray: "#A0A5BA",
      white: "#FFFFFF",
    },
    background: {
      primary: "#fff",
      secondary: "#F0F5FA",
      // gray: "#32343E",
    },
    primary: {
      800: '#FF7622',
    },
    red: {
      100: '#F9D8D4',
      200: '#F3B1A9',
      300: '#ED897D',
      400: '#E76252',
      500: '#E13B27',
      600: '#B42F1F',
      700: '#872317',
      800: '#5A1810',
      900: '#2D0C08',
    },
    blue: {
      100: '#F9D8D4',
      200: '#F3B1A9',
      300: '#ED897D',
      400: '#E76252',
      500: '#E13B27',
      600: '#B42F1F',
      700: '#872317',
      800: '#121223',
      900: '#2D0C08',
    },
    green: {
      800: '#008C8C',
    }


  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
