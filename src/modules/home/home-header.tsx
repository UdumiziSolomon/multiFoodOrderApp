import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';

import Notification from 'svgs/tab/notifications.svg';
import Animated, {
  FadeInUp,
  FadeInRight,
  ReduceMotion,
  BounceInUp,
} from 'react-native-reanimated';

const HomeHeader = () => {
  const ThemeColor = useThemeColor(st => st.theme);

  return (
    <View>
      <View style={styles.header}>
        <Animated.View
          entering={FadeInRight.delay(500).reduceMotion(ReduceMotion.System)}>
          <Text style={[styles.headerName, { color: ThemeColor.PRIMARY }]}>
            Find your favourite food
          </Text>
        </Animated.View>
        <Animated.View
          entering={BounceInUp.delay(500)}
          style={[
            styles.notifyLayer,
            { backgroundColor: ThemeColor.VIEW_OVERLAY },
          ]}>
          <Notification width={ms(28)} height={ms(28)} />
        </Animated.View>
      </View>
      <Animated.View
        entering={FadeInUp.delay(500)}
        style={[styles.loc, { backgroundColor: ThemeColor.VIEW_OVERLAY }]}>
        <Text style={[styles.headerDesc, { color: ThemeColor.SECONDARY }]}>
          🌍 Akure, Ondo State
        </Text>
      </Animated.View>
    </View>
  );
};

export default HomeHeader;

const styles = ScaledSheet.create({
    header: {
      flexDirection: 'row',
      paddingHorizontal: ms(20),
      paddingVertical: ms(10),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerName: {
      fontFamily: Fonts.CBold,
      fontSize: ms(22),
      width: '70%',
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
    loc: {
      width: 'auto',
      alignSelf: 'flex-start',
      paddingVertical: ms(3),
      paddingHorizontal: ms(15),
      borderRadius: ms(50),
      marginHorizontal: ms(20),
    },
  });
