import 'react-native-gesture-handler';

import { LogBox, SafeAreaView } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useThemeColor } from 'hooks/useThemeColor';
import { ScaledSheet } from 'react-native-size-matters';
import RootTabBarNavigator from 'navigations/root.navigator';

LogBox.ignoreAllLogs();

const App = () => {
  const ThemeColor = useThemeColor(st => st.theme);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <SafeAreaView
          style={[styles.wrapper, { backgroundColor: ThemeColor.BACKGROUND }]}>
          <RootTabBarNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
  },
});
