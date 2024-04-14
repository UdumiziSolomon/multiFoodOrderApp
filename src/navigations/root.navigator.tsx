import React, { FC } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from 'types/custom-bottom-tab';
import { Dimensions, Pressable, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { Favourites, Home, Orders, Profile, Search } from 'pages/index';
import { useThemeColor } from 'hooks/useThemeColor';

import { Fonts } from 'ui/components/typography/typography';
// icons
import HomeIcon from 'svgs/tab/home.svg';
import HomeCIcon from 'svgs/tab/home-c.svg';

import SearchIcon from 'svgs/tab/search.svg';
import SearchCIcon from 'svgs/tab/search-c.svg';

import OrdersIcon from 'svgs/tab/orders.svg';
import OrdersCIcon from 'svgs/tab/orders-c.svg';

import FavouritesIcon from 'svgs/tab/favourites.svg';
import FavouritesCIcon from 'svgs/tab/favourites-c.svg';

import ProfileIcon from 'svgs/tab/profile.svg';
import ProfileCIcon from 'svgs/tab/profile-c.svg';

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
      isFocused: <HomeCIcon width={ms(27)} height={ms(27)} />,
      unMounted: <HomeIcon width={ms(25)} height={ms(25)} />,
    },
    Search: {
      isFocused: <SearchCIcon width={ms(27)} height={ms(27)} />,
      unMounted: <SearchIcon width={ms(25)} height={ms(25)} />,
    },
    Orders: {
      isFocused: <OrdersCIcon width={ms(27)} height={ms(27)} />,
      unMounted: <OrdersIcon width={ms(25)} height={ms(25)} />,
    },
    Favourites: {
      isFocused: <FavouritesCIcon width={ms(27)} height={ms(27)} />,
      unMounted: <FavouritesIcon width={ms(25)} height={ms(25)} />,
    },
    Profile: {
      isFocused: <ProfileCIcon width={ms(27)} height={ms(27)} />,
      unMounted: <ProfileIcon width={ms(25)} height={ms(25)} />,
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
        height: ms(65),
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

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{}}>
            <View style={{ alignItems: 'center', height: ms(30) }}>
              {isFocused
                ? imagesObj[route.name]?.isFocused
                : imagesObj[route.name]?.unMounted}
            </View>
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
