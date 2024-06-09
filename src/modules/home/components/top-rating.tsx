import { Dimensions, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';
const { width } = Dimensions.get('screen');

import Food from 'svgs/general/food.svg';
import { TopRatingData } from '../data/home-data';
import Animated, { FadeInDown } from 'react-native-reanimated';

const TopRating = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  return (
    <View style={styles.wrapper}>
      <View style={styles.topLayer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Food width={ms(23)} height={ms(23)} />
          <Text style={[styles.topText, { color: ThemeColor.SECONDARY }]}>
            Top Diners
          </Text>
        </View>
        <View>
          <Text style={[styles.seeText, { color: ThemeColor.SECONDARY }]}>
            View all [10]
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <Animated.View
          style={{
            gap: ms(10),
            flexDirection: 'row',
            paddingHorizontal: ms(20),
            marginTop: ms(10),
          }}>
          {TopRatingData.map(item => {
            const { name, imageLink, rating } = item;
            return (
              <Animated.View
                style={[
                  styles.card,
                  { backgroundColor: ThemeColor.VIEW_OVERLAY },
                ]}>
                <Animated.Image
                  entering={FadeInDown}
                  source={imageLink}
                  style={{
                    width: ms(60),
                    height: ms(60),
                    alignSelf: 'center',
                    borderRadius: ms(60),
                  }}
                  resizeMode={'cover'}
                />
              </Animated.View>
            );
          })}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default TopRating;

const styles = ScaledSheet.create({
  wrapper: {},
  topLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ms(20),
    marginTop: ms(20),
  },
  topText: {
    fontFamily: Fonts.CBold,
    fontSize: ms(14),
    marginLeft: ms(5),
  },
  subText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
  },
  seeText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    textDecorationLine: 'underline',
  },
  card: {
    borderRadius: ms(20),
    paddingVertical: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ms(15),
  },
});
