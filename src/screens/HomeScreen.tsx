import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import HomeSvg from '../../assets/images/Icons/home.svg';
const HomeScreen = ({ navigation }: any) => {
  const { theme, themeMode, setThemeMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Home Screen</Text>

      <Text style={[styles.subtitle, { color: theme.text }]}>
        Theme: {themeMode}
      </Text>
      <HomeSvg width={120} height={40} />
      <Button title="System Theme" onPress={() => setThemeMode('system')} />
      <Button title="Light Theme" onPress={() => setThemeMode('light')} />
      <Button title="Dark Theme" onPress={() => setThemeMode('dark')} />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
