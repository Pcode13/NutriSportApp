import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FontExample = () => {
  return <Text style={styles.customFont}>This text uses a custom font</Text>;
};

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'Oswald-Bold', // Replace with your font name
    fontSize: 18,
  },
});

export default FontExample;
