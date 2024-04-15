import { Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';

const TopRating = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  return (
    <View style={styles.wrapper}>
      <View style={styles.topLayer}>
        <Text style={[styles.topText, { color: ThemeColor.SECONDARY }]}>
          Top Rating
        </Text>
        <Text style={[styles.subText, { color: ThemeColor.SECONDARY }]}>
          See All
        </Text>
      </View>
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
  },
  topText: {
    fontFamily: Fonts.CBold,
    fontSize: ms(15),
  },
  subText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
  },
});
