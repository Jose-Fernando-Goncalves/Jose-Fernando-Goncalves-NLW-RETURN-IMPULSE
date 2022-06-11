import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';
import { Widget } from './src/components/widget';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { Home } from './src/screens/home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
         <Home />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}


