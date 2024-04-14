import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';
import { ScreenWrapper } from 'ui/components/layout/screen-wrapper';
import { HomeHeader } from 'modules/home';

const Home = () => {
  return (
    <ScreenWrapper style={{}}>
      <HomeHeader />
    </ScreenWrapper>
  );
};

export default Home;

const styles = ScaledSheet.create({
});
