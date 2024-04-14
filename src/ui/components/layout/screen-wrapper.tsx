import { useThemeColor } from 'hooks/useThemeColor';
import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

interface IScreenProps extends React.ComponentProps<typeof View> {
  style?: ViewStyle;
  children?: ReactNode;
}

export const ScreenWrapper = ({ style, children }: IScreenProps) => {
  const ThemeColor = useThemeColor(st => st.theme);
  return (
    <View style={[style, { backgroundColor: ThemeColor.BACKGROUND, flex: 1 }]}>
      {children}
    </View>
  );
};
