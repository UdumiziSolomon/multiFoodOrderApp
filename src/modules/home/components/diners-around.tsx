import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Text, View, Dimensions, Pressable } from 'react-native';
import { Fonts } from 'ui/components/typography/typography';
import Animated, { FlipInEasyX } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

import ArrowRight from 'svgs/general/arrow-right.svg';

const DinersAround = () => {
  const ThemeColor = useThemeColor(st => st.theme);

  return (
    <View style={[styles.news, { backgroundColor: ThemeColor.VIEW_OVERLAY }]}>
      <Animated.View
        entering={FlipInEasyX.delay(600)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingVertical: ms(10),
        }}>
        <View>
          {/* <Text
            style={{
              color: ThemeColor.SECONDARY,
              fontFamily: Fonts.CBold,
              fontSize: ms(15),
            }}>
            Explore Nearby Diners
          </Text> */}
          <Text
            style={{
              color: ThemeColor.PRIMARY,
              fontFamily: Fonts.ARegular,
              fontSize: ms(12),
              marginTop: ms(2),
              width: width / 1.8
            }}>
            Find the perfect spot to satisfy your hunger and enjoy delicious food nearby
          </Text>
        </View>
        <Pressable
          style={{
            borderColor: ThemeColor.OPP_DISPLAY,
            borderWidth: 1.5,
            borderRadius: ms(10),
            alignItems: 'center',
            paddingVertical: ms(7),
            marginTop: ms(6),
            paddingHorizontal: ms(10),
          }}>
          <ArrowRight width={20} height={20} />
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default DinersAround;

const styles = ScaledSheet.create({
  news: {
    width: width - ms(30),
    alignSelf: 'center',
    paddingVertical: ms(10),
    paddingHorizontal: ms(15),
    borderRadius: ms(20),
    marginTop: ms(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
