import React, { FC, ReactNode } from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { isAndroidFullScreenMode } from '../utils/helper';
interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  background?: string;
}

const Page: FC<Props> = ({ children, style, background }) => {
  const { theme } = useTheme();
  let backgroundColor = background || theme.background;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={[styles.innerContainer, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroidFullScreenMode() ? StatusBar.currentHeight : 0,
    // backgroundColor: '#181c14',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
});

export default Page;
