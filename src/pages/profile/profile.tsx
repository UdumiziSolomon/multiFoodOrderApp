import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { ScreenWrapper } from 'ui/components/layout/screen-wrapper';

const Profile = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  const changeThemeHandler = useThemeColor(st => st.updateTheme);

  return (
    <ScreenWrapper style={{}}>
      <Text style={{ color: ThemeColor.PRIMARY }}> Profile </Text>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = ScaledSheet.create({});
