import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';

import Animated, {
  FadeInUp,
  FadeInRight,
  ReduceMotion,
  BounceInUp,
} from 'react-native-reanimated';

import Bell from 'svgs/tab/bell.svg';
import Moon from 'svgs/tab/moon.svg';
import Sun from 'svgs/tab/sun.svg';

const HomeHeader = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  const { updateTheme, themeBool } = useThemeColor();

  return (
    <View>
      <View style={styles.header}>
        <Animated.View
          entering={FadeInRight.delay(500).reduceMotion(ReduceMotion.System)}>
          <Text style={[styles.headerName, { color: ThemeColor.PRIMARY }]}>
            Find your favourite food
          </Text>
        </Animated.View>

        <View style={{ flexDirection: 'row', gap: ms(10) }}>
          <Pressable onPress={updateTheme}>
            <Animated.View
              entering={BounceInUp.delay(500)}
              style={[
                styles.notifyLayer,
                { backgroundColor: ThemeColor.VIEW_OVERLAY },
              ]}>
              {themeBool ? (
                <Sun width={ms(23)} height={ms(23)} />
              ) : (
                <Moon width={ms(23)} height={ms(23)} />
              )}
            </Animated.View>
          </Pressable>
          
          <Animated.View
            entering={BounceInUp.delay(500)}
            style={[
              styles.notifyLayer,
              { backgroundColor: ThemeColor.VIEW_OVERLAY },
            ]}>
            <Bell width={ms(23)} height={ms(23)} />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: ms(20),
    paddingVertical: ms(10),
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexShrink: ms(10),
  },
  headerName: {
    fontFamily: Fonts.CBold,
    fontSize: ms(21),
    width: '60%',
  },
  headerDesc: {
    fontFamily: Fonts.ARegular,
    fontSize: ms(11),
    paddingBottom: ms(3),
  },
  notifyLayer: {
    padding: ms(8),
    borderRadius: ms(50),
  },
});
