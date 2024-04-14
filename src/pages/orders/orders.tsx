import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';
import { ScreenWrapper } from 'ui/components/layout/screen-wrapper';

const Orders = () => {
  const ThemeColor = useThemeColor(st => st.theme);

  return (
    <ScreenWrapper style={{}}>
      <Text style={{ color: ThemeColor.PRIMARY }}> Orders </Text>
    </ScreenWrapper>
  );
};

export default Orders;

const styles = ScaledSheet.create({});
