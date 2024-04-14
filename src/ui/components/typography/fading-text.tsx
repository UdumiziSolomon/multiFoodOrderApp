import React, { ReactNode, useLayoutEffect } from 'react';
import { TextStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export interface FadingTextProps {
  text: string;
  duration?: number;
  style?: TextStyle | TextStyle[] | any;
}

const FadingText: React.FC<FadingTextProps> = ({
  text,
  duration = 1000,
  style,
}) => {
  const opacityValue = useSharedValue(0);

  useLayoutEffect(() => {
    opacityValue.value = withTiming(1, {
      duration: duration,
      easing: Easing.inOut(Easing.ease),
    });
  }, [opacityValue, duration]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  return <Animated.Text style={[style, animatedStyles]}>{text}</Animated.Text>;
};

export default FadingText;
