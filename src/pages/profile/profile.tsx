import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useThemeColor } from 'hooks/useThemeColor';
import { Fonts } from 'ui/components/typography/typography';
import { ScreenWrapper } from 'ui/components/layout/screen-wrapper';

const Profile = () => {
  const ThemeColor = useThemeColor(st => st.theme);
  const changeThemeHandler = useThemeColor(st => st.updateTheme);

  return (
    <ScreenWrapper style={{}}>
      <Text style={{ color: ThemeColor.PRIMARY }}> Profile </Text>
      <Pressable
        onPress={changeThemeHandler}
        style={{
          borderColor: ThemeColor.PRIMARY,
          borderWidth: 2,
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.Regular,
            fontSize: 17,
            color: ThemeColor.SECONDARY,
            textAlign: 'center',
          }}>
          Change Theme
        </Text>
      </Pressable>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = ScaledSheet.create({});
