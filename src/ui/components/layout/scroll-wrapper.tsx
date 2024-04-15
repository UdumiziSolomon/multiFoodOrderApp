import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useThemeColor } from 'hooks/useThemeColor';
import React, { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

interface IScrollProps extends React.ComponentProps<typeof View> {
  style?: ViewStyle;
  children?: ReactNode;
  type?: 'scroll' | 'no-scroll';
}

export const ScrollWrapper = ({ style, children, type }: IScrollProps) => {
  const ThemeColor = useThemeColor(st => st.theme);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={[style, { backgroundColor: ThemeColor.BACKGROUND, flex: 1 }]}>
      {type === 'scroll' ? (
        <KeyboardAwareScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <View style={style}>{children}</View>
      )}
    </ScrollView>
  );
};
