import React, { FC } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from 'types/custom-bottom-tab';
import { Dimensions, Pressable, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { Favourites, Home, Orders, Profile, Search } from 'pages/index';
import { useThemeColor } from 'hooks/useThemeColor';

// icons
import HomeIcon from 'svgs/tab/home.svg';
import SearchIcon from 'svgs/tab/search.svg';
import OrdersIcon from 'svgs/tab/orders.svg';
import FavouritesIcon from 'svgs/tab/favourites.svg';

import ProfileIcon from 'svgs/tab/profile.svg';
import Animated, {
  BounceInDown,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator<ParamListBase>();
const { width } = Dimensions.get('window');

const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const ThemeColor = useThemeColor(st => st.theme);

  const imagesObj: {
    [key: string]: {
      isFocused: React.JSX.Element;
      unMounted: React.JSX.Element;
    };
  } = {
    Home: {
      isFocused: <HomeIcon width={ms(29)} height={ms(29)} />,
      unMounted: <HomeIcon width={ms(29)} height={ms(29)} />,
    },
    Search: {
      isFocused: <SearchIcon width={ms(28)} height={ms(28)} />,
      unMounted: <SearchIcon width={ms(28)} height={ms(28)} />,
    },
    Orders: {
      isFocused: <OrdersIcon width={ms(27)} height={ms(27)} />,
      unMounted: <OrdersIcon width={ms(27)} height={ms(27)} />,
    },
    Favourites: {
      isFocused: <FavouritesIcon width={ms(27)} height={ms(27)} />,
      unMounted: <FavouritesIcon width={ms(27)} height={ms(27)} />,
    },
    Profile: {
      isFocused: <ProfileIcon width={ms(26)} height={ms(26)} />,
      unMounted: <ProfileIcon width={ms(26)} height={ms(26)} />,
    },
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: ThemeColor.TAB_BAR_BACKGROUND,
        borderRadius: ms(100),
        width: width - ms(20),
        alignSelf: 'center',
        marginTop: ms(10),
        height: ms(60),
      }}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const animatedStyle = useAnimatedStyle(() => ({
          transform: [
            {
              scale: isFocused ? withSpring(1.1, { duration: 100 }) : 1,
            },
          ],
        }));

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{}}>
            <Animated.View
              entering={BounceInDown.delay(200)}
              style={[{
                alignItems: 'center',
                height: ms(35),
                paddingHorizontal: ms(5),
                borderBottomWidth: isFocused ? ms(1) : 0,
                borderBottomColor: ThemeColor.PRIMARY,
                borderRadius: ms(100),
              }, animatedStyle]}>
              {isFocused
                ? imagesObj[route.name]?.isFocused
                : imagesObj[route.name]?.unMounted}
            </Animated.View>
          </Pressable>
        );
      })}
    </View>
  );
};

const RootTabBarNavigator = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      initialRouteName={'Home'}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Orders" component={Orders} />
      <Screen name="Favourites" component={Favourites} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default RootTabBarNavigator;
