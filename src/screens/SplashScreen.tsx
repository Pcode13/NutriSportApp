import React, { FC, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Page from '../ui/Page';
import { useTheme } from '../context/ThemeContext';
import { useFonts } from '../hooks/useFonts';
import { useNavigation } from '@react-navigation/native';

interface Props {}

const SplashScreen: FC<Props> = () => {
  const { theme } = useTheme();
  const fonts = useFonts();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Page style={styles.wrapContainer}>
      <Text
        style={[styles.title, { color: theme.title, fontFamily: fonts.bold }]}
      >
        NUTRISPORT
      </Text>
    </Page>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default SplashScreen;
