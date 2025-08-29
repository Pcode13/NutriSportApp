import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from './src/hooks/useFonts';

const CustomFonts = () => {
  const fonts = useFonts();

  return (
    <View style={styles.container}>
      <Text style={[styles.regular, { fontFamily: fonts.regular }]}>
        Oswald Regular
      </Text>
      <Text style={[styles.light, { fontFamily: fonts.light }]}>
        Oswald Light
      </Text>
      <Text style={[styles.medium, { fontFamily: fonts.medium }]}>
        Oswald Medium
      </Text>
      <Text style={[styles.semiBold, { fontFamily: fonts.semiBold }]}>
        Oswald SemiBold
      </Text>
      <Text style={[styles.bold, { fontFamily: fonts.bold }]}>Oswald Bold</Text>
      <Text style={[styles.extraLight, { fontFamily: fonts.extraLight }]}>
        Oswald ExtraLight
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  regular: {
    fontSize: 18,
    marginBottom: 10,
  },
  light: {
    fontSize: 18,
    marginBottom: 10,
  },
  medium: {
    fontSize: 18,
    marginBottom: 10,
  },
  semiBold: {
    fontSize: 18,
    marginBottom: 10,
  },
  bold: {
    fontSize: 18,
    marginBottom: 10,
  },
  extraLight: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CustomFonts;
