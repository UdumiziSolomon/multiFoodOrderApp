import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { ScreenWrapper } from 'ui/components/layout/screen-wrapper';
import { HomeHeader, Restaurants, TopRating } from 'modules/home';
import { Text, View, Dimensions } from 'react-native';
import useNetworkStatus from 'utils/net-info';
import { ScrollWrapper } from 'ui/components/layout/scroll-wrapper';
import { Fonts } from 'ui/components/typography/typography';
import Wifi from 'svgs/tab/wifi.svg';
import Animated, { BounceInUp, FlipInEasyX } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

import Notifications from 'svgs/tab/notifications.svg';
import DinersAround from 'modules/home/components/diners-around';

const Home = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  const networkStat = useNetworkStatus();

  return (
    <ScreenWrapper style={{ flex: 1 }}>
      <HomeHeader />
      <View style={[styles.news, { backgroundColor: ThemeColor.OPP_DISPLAY }]}>
        <View style={{ width: '60%' }}>
          <Text style={[styles.newsText, { color: ThemeColor.BACKGROUND }]}>
            Free Delivery
          </Text>
          <Text style={[styles.newsSubText, { color: ThemeColor.BACKGROUND }]}>
            Enjoy free delivery until 20/12/2024
          </Text>
        </View>
        <Animated.View entering={FlipInEasyX.delay(600)}>
          <Notifications width={ms(70)} height={ms(70)} />
        </Animated.View>
      </View>
      {!networkStat && (
        <Animated.View
          entering={BounceInUp}
          style={[
            styles.netStatLayer,
            { backgroundColor: ThemeColor.VIEW_OVERLAY },
          ]}>
          <Wifi width={ms(16)} height={ms(16)} />
          <Text
            style={{
              color: ThemeColor.SECONDARY,
              fontFamily: Fonts.CRegular,
              marginTop: ms(5),
              fontSize: ms(10),
              marginLeft: ms(10),
              paddingBottom: ms(2),
            }}>
            No Internet connection
          </Text>
        </Animated.View>
      )}
      <ScrollWrapper style={{ marginTop: ms(5) }}>
        <TopRating />
        <Restaurants />
        <DinersAround />
      </ScrollWrapper>
    </ScreenWrapper>
  );
};

export default Home;

const styles = ScaledSheet.create({
  netStatLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ms(10),
    marginTop: ms(4),
  },
  news: {
    width: width - ms(30),
    alignSelf: 'center',
    paddingVertical: ms(10),
    paddingHorizontal: ms(20),
    borderRadius: ms(20),
    marginTop: ms(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newsText: {
    fontFamily: Fonts.CBold,
    fontSize: ms(14),
  },
  newsSubText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    textAlign: 'center',
  },
});
