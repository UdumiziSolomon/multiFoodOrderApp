import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';
import { ScreenWrapper } from 'ui/components/layout/screen-wrapper';

import Notification from 'svgs/tab/notifications.svg';
import FadingText, { FadingTextProps } from 'ui/components/typography/fading-text';

const Home = () => {
  const ThemeColor = useThemeColor(st => st.theme);

  return (
    <ScreenWrapper style={{}}>
      <View style={styles.header}>
        <View>
          <FadingText
            style={[styles.headerName, { color: ThemeColor.PRIMARY }]}
            text="Find your favourite food."
            duration={1000}
          />
        </View>
        <View
          style={[
            styles.notifyLayer,
            { backgroundColor: ThemeColor.VIEW_OVERLAY },
          ]}>
          <Notification width={ms(28)} height={ms(28)} />
        </View>
      </View>
      <View style={[styles.loc, { backgroundColor: ThemeColor.VIEW_OVERLAY }]}>
        <Text style={[styles.headerDesc, { color: ThemeColor.SECONDARY }]}>
        🌍  Akure, Ondo State
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

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
    fontFamily: Fonts.Regular,
    fontSize: ms(14),
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
