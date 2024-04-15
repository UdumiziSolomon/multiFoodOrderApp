import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color } from 'ui/components/typography/typography';

const { darkTheme, lightTheme } = Color;

type TThemeColorStore = {
  theme: typeof lightTheme | typeof darkTheme;
  updateTheme: () => void;
  themeBool: boolean
};

export const useThemeColor = create<TThemeColorStore>()(
  persist(
    set => ({
      theme: darkTheme,
      themeBool: false,
      updateTheme: () => {
        set(prevState => ({
          theme: prevState.theme === lightTheme ? darkTheme : lightTheme,
          themeBool: prevState.theme === lightTheme ? true : false,
        }));
      },
    }),
    { name: 'country-storage', storage: createJSONStorage(() => AsyncStorage) },
  ),
);

export const ThemeColor = useThemeColor.getState();

useThemeColor.subscribe(themeColor => {
  ThemeColor.theme = themeColor.theme;
});
