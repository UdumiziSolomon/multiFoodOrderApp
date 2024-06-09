import { Dimensions, Image, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';
import { ScrollView } from 'react-native-gesture-handler';
import { RestaurantData } from '../data/home-data';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');
import Grid from 'svgs/general/grid.svg';
import Verified from 'svgs/general/verified.svg';
import Star from 'svgs/general/star.svg';
import Spoon from 'svgs/general/spoon.svg';

const Restaurants = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  return (
    <View style={styles.wrapper}>
      <View style={styles.topLayer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Spoon width={ms(23)} height={ms(23)} />
          <Text style={[styles.topText, { color: ThemeColor.SECONDARY }]}>
            Diners
          </Text>
        </View>
        <View>
          <Text style={[styles.seeText, { color: ThemeColor.SECONDARY }]}>
            View all [22]
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
          {RestaurantData.map(item => {
            const { name, imageLink, rating } = item;
            return (
              <Animated.View
                style={[
                  styles.card,
                  { backgroundColor: ThemeColor.VIEW_OVERLAY },
                ]}>
                <View
                  style={{ position: 'absolute', top: ms(10), left: ms(10) }}>
                  <Verified width={ms(23)} height={ms(23)} />
                </View>
                <Animated.Image
                  entering={FadeInDown}
                  source={imageLink}
                  style={{
                    width: ms(90),
                    height: ms(90),
                    alignSelf: 'center',
                    borderRadius: ms(100),
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: ms(10),
                  }}>
                  <Star width={ms(15)} height={ms(15)} />
                  <Animated.Text
                    style={[styles.rating, { color: ThemeColor.SECONDARY }]}>
                    {rating}
                  </Animated.Text>
                </View>
                <Animated.Text
                  style={[styles.name, { color: ThemeColor.SECONDARY }]}>
                  {name}
                </Animated.Text>
              </Animated.View>
            );
          })}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Restaurants;

const styles = ScaledSheet.create({
  wrapper: {},
  topLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ms(20),
    marginTop: ms(25),
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
  card: {
    height: ms(190),
    width: width / ms(2.2),
    borderRadius: ms(20),
    paddingVertical: ms(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ms(15),
  },
  name: {
    fontFamily: Fonts.CRegular,
    fontSize: ms(9.5),
    textAlign: 'center',
    marginTop: ms(7),
  },
  rating: {
    fontFamily: Fonts.CMedium,
    fontSize: ms(12),
    paddingTop: ms(2),
    marginLeft: ms(3),
  },
  location: {
    fontFamily: Fonts.CRegular,
    fontSize: ms(10),
    marginTop: ms(2),
    textAlign: 'center',
  },
  seeText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    textDecorationLine: 'underline',
  },
});
